from patchright.sync_api import sync_playwright
import time
import json
import os
import random
import argparse
from datetime import datetime
import requests

from regions import regions


def parse_arguments():
    parser = argparse.ArgumentParser(description="Kos Price Scraper")
    parser.add_argument(
        "--force-update",
        "--update",
        action="store_true",
        help="Re-scrape all regions ignoring existing data",
    )
    parser.add_argument(
        "--region", type=str, help="Scrape specific region only (e.g., jakarta)"
    )
    parser.add_argument(
        "--verbose", "-v", action="store_true", help="Enable verbose logging"
    )
    parser.add_argument(
        "--headless",
        action="store_true",
        default=True,
        help="Run browser in headless mode",
    )
    return parser.parse_args()


def load_existing_data(force_update=False):
    """Load existing backup data to continue scraping"""
    if force_update:
        print("🔄 FORCE UPDATE MODE - Will re-scrape all regions")
        return [], set()  # Return empty, re-scrape semua

    script_dir = os.path.dirname(os.path.abspath(__file__))
    data_dir = os.path.join(script_dir, "../data/data-scrape")
    backup_dir = os.path.join(data_dir, "backup")  # NEW: backup subfolder

    # Create directories if they don't exist
    os.makedirs(backup_dir, exist_ok=True)

    # Cari backup file terbaru di folder backup
    try:
        backup_files = [
            f for f in os.listdir(backup_dir) if f.startswith("data-scrape_backup_")
        ]
        if backup_files:
            latest_backup = max(
                backup_files,
                key=lambda x: int(x.split("_")[-1].split(".")[0]),
            )
            backup_path = os.path.join(backup_dir, latest_backup)  # Updated path

            with open(backup_path, "r", encoding="utf-8") as f:
                existing_data = json.load(f)

            # Hitung region yang sudah selesai (minimal 50+ records per region)
            region_counts = {}
            for item in existing_data:
                if "region" in item and item["region"]:
                    region_counts[item["region"]] = (
                        region_counts.get(item["region"], 0) + 1
                    )

            # Region dianggap selesai jika ada 100+ records
            completed_regions = {
                region for region, count in region_counts.items() if count >= 100
            }

            print(
                f"📂 Loaded {len(existing_data)} existing records from backup/{latest_backup}"
            )
            print(f"📊 Region counts: {region_counts}")
            print(f"✅ Completed regions (100+ records): {list(completed_regions)}")
            return existing_data, completed_regions
    except Exception as e:
        print(f"❌ Error loading backup: {e}")

    return [], set()


def save_by_regions(all_data, data_dir):
    """Split and save data by regions"""
    regions_dir = os.path.join(data_dir, "regions")
    os.makedirs(regions_dir, exist_ok=True)

    by_region = {}
    for item in all_data:
        region = item.get("region", "unknown")
        region_name = region.split("-")[0]  # jakarta, bandung, etc.

        if region_name not in by_region:
            by_region[region_name] = []
        by_region[region_name].append(item)

    for region_name, data in by_region.items():
        filename = f"data-scrape-{region_name}.json"
        filepath = os.path.join(regions_dir, filename)
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"📁 Saved {len(data)} records to regions/{filename}")


def smart_kategorisasi(fasilitas_list):
    from difflib import SequenceMatcher

    def similarity(a, b):
        return SequenceMatcher(None, a.lower(), b.lower()).ratio()

    kategori_templates = {
        "ukuran_listrik": [
            "meter",
            "listrik",
            "termasuk listrik",
            "tidak termasuk listrik",
            "x",
        ],
        "kamar": [
            "kasur",
            "meja",
            "lemari",
            "ac",
            "tv",
            "bantal",
            "cermin",
            "guling",
            "kursi",
            "kipas",
            "ventilasi",
            "jendela",
        ],
        "kamar_mandi": [
            "kloset",
            "shower",
            "wastafel",
            "k. mandi",
            "kamar mandi",
            "ember",
            "bak mandi",
            "air panas",
            "toilet",
        ],
        "umum": [
            "wifi",
            "kulkas",
            "ruang cuci",
            "ruang tamu",
            "ruang jemur",
            "dapur",
            "dispenser",
            "cctv",
            "cleaning",
            "penjaga",
            "mesin cuci",
            "laundry",
            "mushola",
            "jemuran",
            "balcon",
        ],
        "parkir": ["parkir", "motor", "mobil", "sepeda", "garasi"],
    }

    result = {
        "ukuran_listrik": [],
        "kamar": [],
        "kamar_mandi": [],
        "umum": [],
        "parkir": [],
    }

    for fasilitas in fasilitas_list:
        best_category = "umum"  # default fallback
        best_score = 0.3  # minimum threshold

        for category, templates in kategori_templates.items():
            for template in templates:
                score = similarity(fasilitas, template)
                if score > best_score:
                    best_score = score
                    best_category = category

        result[best_category].append(fasilitas)

    return result


def is_duplicate(new_data, existing_data):
    """Check if data already exists"""
    new_key = (
        new_data.get("nama_kos", ""),
        new_data.get("harga", ""),
        new_data.get("alamat", ""),
    )

    for existing in existing_data:
        existing_key = (
            existing.get("nama_kos", ""),
            existing.get("harga", ""),
            existing.get("alamat", ""),
        )
        if new_key == existing_key:
            return True
    return False


def check_internet_connection():
    """Quick internet connection check"""
    try:
        response = requests.get("https://httpbin.org/get", timeout=5)
        return response.status_code == 200
    except Exception:
        return False


def scrape(playwright, args):
    # Load existing data with force_update parameter
    all_rooms_data, completed_regions = load_existing_data(args.force_update)

    browser = playwright.chromium.launch_persistent_context(
        user_data_dir=r"C:\playwright",
        channel="chrome",
        headless=args.headless,  # Use CLI argument
        no_viewport=True,
    )

    page = browser.new_page()

    # Filter regions if specific region requested
    regions_to_process = regions
    if args.region:
        # Find matching region
        matching_regions = [r for r in regions if args.region.lower() in r.lower()]
        if matching_regions:
            regions_to_process = matching_regions
            print(
                f"🎯 Found {len(matching_regions)} matching regions for '{args.region}'"
            )
        else:
            print(f"❌ No regions found matching '{args.region}'")
            return []

    for region in regions_to_process:
        # Skip completed regions (unless force_update)
        if not args.force_update and region in completed_regions:
            print(f"⏭️ Skipping completed region: {region}")
            continue

        print(f"🎯 Processing region: {region}")

        if args.verbose:
            print(
                f"📝 Starting scrape for {region} with {len(all_rooms_data)} existing records"
            )

        # ...existing scraping logic stays the same...
        region_keywords = region.split("-")[0]
        url = f"https://mamikos.com/cari/{region}/all/bulanan/0-15000000?keyword={region_keywords}&suggestion_type=search&rent=2&sort=price,-&price=10000-20000000&singgahsini=0"

        if args.verbose:
            print(f"📝 URL: {url}")

        page.goto(url)

        # ...rest of existing code stays exactly the same...
        for more_rooms in range(30):  # 30 kali!
            try:
                # Wait for link with shorter timeout - Updated selector for <a> tag
                page.wait_for_selector("a.list__content-load-link", timeout=10000)

                # Updated selector to match the actual HTML structure (a tag, not button)
                link = page.locator("a.list__content-load-link")

                # Check if link is actually clickable
                if link.count() > 0 and link.is_visible():
                    link.scroll_into_view_if_needed()
                    link.click()
                    time.sleep(random.uniform(1, 2))
                    print(f"    ✅ Clicked 'Lihat lebih banyak' #{more_rooms + 1}")
                else:
                    print("    ℹ️ No more 'Lihat lebih banyak' link, stopping expansion")
                    break

            except Exception as e:
                print(
                    f"    ℹ️ No more pages to load or link not found: {str(e)[:50]}..."
                )
                break  # Exit loop if no more links
        time.sleep(random.uniform(2, 4))  # Delay before scraping cards

        cards = page.locator('[data-testid="kostRoomCard"]').all()
        print(f"Found {len(cards)} cards in region {region}")

        consecutive_duplicates = 0  # Add duplicate counter

        for i, card in enumerate(cards):
            # Check connection every 20 cards
            if i % 20 == 0 and i > 0:
                if not check_internet_connection():
                    print(
                        f"❌ Connection lost at card {i}. Saving progress and moving to next region..."
                    )
                    break

            # Random delay untuk mimic human behavior
            time.sleep(random.uniform(1, 3))

            # Add robust timeout and error handling
            try:
                with page.context.expect_page(
                    timeout=15000
                ) as new_page_info:  # Reduced timeout
                    card.click()
                new_page = new_page_info.value
            except Exception as e:
                if args.verbose:
                    print(
                        f"⚠️ Failed to open card {i + 1}: {str(e)[:50]}... Skipping..."
                    )
                continue  # Skip this card and continue

            # Check if page loaded successfully
            try:
                new_page.wait_for_load_state(
                    "networkidle", timeout=10000
                )  # Reduced timeout

                # Check for error pages
                if (
                    "403" in new_page.title()
                    or "Forbidden" in new_page.title()
                    or "Error" in new_page.title()
                ):
                    if args.verbose:
                        print("❌ Access denied or error page detected, skipping...")
                    new_page.close()
                    continue

            except Exception as e:
                if args.verbose:
                    print(f"❌ Page load timeout: {str(e)[:50]}... Skipping...")
                new_page.close()
                continue

            # Human-like scrolling pattern
            new_page.evaluate("window.scrollTo(0, document.body.scrollHeight/3)")
            time.sleep(random.uniform(1, 2))
            new_page.evaluate("window.scrollTo(0, document.body.scrollHeight*2/3)")
            time.sleep(random.uniform(1, 2))
            new_page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            time.sleep(random.uniform(2, 3))
            new_page.evaluate("window.scrollTo(document.body.scrollHeight, 0)")
            time.sleep(random.uniform(1, 2))

            # Helper function sama seperti toms_scraper2.py
            def safe_get_text(selector):
                """Safely get text from selector"""
                try:
                    element = new_page.locator(selector).first
                    if element.count() > 0:
                        return element.inner_text().strip()
                    return ""
                except Exception:
                    return ""

            def safe_get_list(selector):
                """Safely get list of text from multiple elements"""
                try:
                    elements = new_page.locator(selector)
                    result = []
                    for i in range(elements.count()):
                        text = elements.nth(i).inner_text().strip()
                        if text:
                            result.append(text)
                    return result
                except Exception:
                    return []

            room_data = {}

            # Basic info - sama seperti toms_scraper2.py
            room_data["nama_kos"] = safe_get_text(".detail-title__room-name")
            room_data["jenis_kos"] = safe_get_text(".detail-kost-overview__gender-box")
            room_data["area"] = safe_get_text(".detail-kost-overview__area-text")
            room_data["rating"] = safe_get_text(".detail-kost-overview__rating-text")
            room_data["jumlah_review"] = safe_get_text(
                ".detail-kost-overview__rating-review"
            )
            room_data["total_transaksi"] = safe_get_text(
                ".detail-kost-overview__total-transaction-text"
            )

            # Harga - sama seperti toms_scraper2.py
            room_data["harga"] = safe_get_text(".rc-price__text")
            room_data["periode"] = safe_get_text(".rc-price__type")

            # Lokasi - sama seperti toms_scraper2.py
            room_data["alamat"] = safe_get_text(".bg-c-text--body-4")

            # Fasilitas dengan smart kategorisasi
            fasilitas_list = safe_get_list(".detail-kost-facility-item__label")
            room_data["fasilitas"] = smart_kategorisasi(fasilitas_list)

            # Peraturan
            room_data["peraturan"] = safe_get_list(".detail-kost-rule-item__label")

            # Landmarks - sama seperti toms_scraper2.py
            landmarks = []
            landmark_names = new_page.locator(".landmark-item__text-ellipsis")
            landmark_distances = new_page.locator(".landmark-item__landmark-distance")

            for i in range(landmark_names.count()):
                name = landmark_names.nth(i).inner_text().strip()
                distance = (
                    landmark_distances.nth(i).inner_text().strip()
                    if i < landmark_distances.count()
                    else ""
                )
                landmarks.append({"nama": name, "jarak": distance})
            room_data["landmarks"] = landmarks

            # Meta data
            room_data["region"] = region
            room_data["url"] = new_page.url
            room_data["scraped_at"] = datetime.now().isoformat()

            # Check for duplicates before adding
            if not is_duplicate(room_data, all_rooms_data):
                all_rooms_data.append(room_data)
                print(f"✅ Extracted: {room_data['nama_kos']} - {room_data['harga']}")
                consecutive_duplicates = 0  # Reset counter
            else:
                if args.verbose:
                    print(f"⚠️ Skipped duplicate: {room_data['nama_kos']}")
                consecutive_duplicates += 1

                # Early exit if too many consecutive duplicates
                if consecutive_duplicates >= 20:
                    print(
                        f"🛑 Region data exhausted ({consecutive_duplicates} consecutive duplicates)"
                    )
                    print(
                        f"📊 Total extracted from {region}: {len([r for r in all_rooms_data if r.get('region') == region])} records"
                    )
                    break  # Exit card loop, move to next region

            # UPDATED: Save backup to backup subfolder
            if len(all_rooms_data) % 50 == 0:
                script_dir = os.path.dirname(os.path.abspath(__file__))
                data_dir = os.path.join(script_dir, "../data/data-scrape")
                backup_dir = os.path.join(data_dir, "backup")  # NEW: backup subfolder
                os.makedirs(backup_dir, exist_ok=True)

                temp_filename = os.path.join(
                    backup_dir,
                    f"data-scrape_backup_{len(all_rooms_data)}.json",  # Save to backup folder
                )

                with open(temp_filename, "w", encoding="utf-8") as f:
                    json.dump(all_rooms_data, f, ensure_ascii=False, indent=2)
                print(
                    f"🔄 Backup saved: backup/data-scrape_backup_{len(all_rooms_data)}.json"
                )

            # Random delay before closing and moving to next
            time.sleep(random.uniform(2, 4))
            new_page.close()

        # Add memory cleanup every 5 regions
        if (
            regions_to_process.index(region) % 5 == 0
            and regions_to_process.index(region) > 0
        ):
            print("🔄 Memory cleanup...")
            page.close()
            page = browser.new_page()
            time.sleep(random.uniform(10, 20))  # Longer break

        # Delay between regions to be more polite
        print(f"📝 Completed region {region}. Taking a break...")
        time.sleep(random.uniform(5, 10))

    browser.close()
    return all_rooms_data  # Return data untuk di-save


if __name__ == "__main__":
    args = parse_arguments()

    if args.force_update:
        print("🚀 FORCE UPDATE MODE - Re-scraping all regions")

    if args.region:
        print(f"🎯 SINGLE REGION MODE - Scraping {args.region} only")

    if args.verbose:
        print("📝 VERBOSE MODE - Detailed logging enabled")

    with sync_playwright() as playwright:
        all_rooms_data = scrape(playwright, args)

    # Create directory structure
    script_dir = os.path.dirname(os.path.abspath(__file__))
    data_dir = os.path.join(script_dir, "../data/data-scrape")
    backup_dir = os.path.join(data_dir, "backup")
    os.makedirs(data_dir, exist_ok=True)
    os.makedirs(backup_dir, exist_ok=True)

    # Save master file
    filename = os.path.join(data_dir, "data-scrape.json")
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(all_rooms_data, f, ensure_ascii=False, indent=2)
    print("💾 Master file saved: data-scrape.json")

    # Save by regions
    save_by_regions(all_rooms_data, data_dir)

    print(f"📊 Total rooms scraped: {len(all_rooms_data)}")
    print("📁 File structure created:")
    print("   /data-scrape/")
    print("   ├── /backup/")
    print("   ├── /regions/")
    print("   └── data-scrape.json")
