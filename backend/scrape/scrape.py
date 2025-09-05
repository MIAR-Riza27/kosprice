from patchright.sync_api import sync_playwright
import time
import json
import os
import random
from datetime import datetime

from regions import regions


def load_existing_data():
    """Load existing backup data to continue scraping"""
    script_dir = os.path.dirname(os.path.abspath(__file__))
    data_dir = os.path.join(script_dir, "../data/data-scrape")

    # Cari backup file terbaru
    try:
        backup_files = [
            f for f in os.listdir(data_dir) if f.startswith("data-scrape_backup_")
        ]
        if backup_files:
            latest_backup = max(
                backup_files,
                key=lambda x: int(x.split("_")[-1].split(".")[0]),
            )
            backup_path = os.path.join(data_dir, latest_backup)

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

            print(f"📂 Loaded {len(existing_data)} existing records")
            print(f"📊 Region counts: {region_counts}")
            print(f"✅ Completed regions (100+ records): {list(completed_regions)}")
            return existing_data, completed_regions
    except Exception as e:
        print(f"❌ Error loading backup: {e}")

    return [], set()


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


def scrape(playwright):
    # Load existing data
    all_rooms_data, completed_regions = load_existing_data()

    browser = playwright.chromium.launch_persistent_context(
        user_data_dir=r"C:\playwright",
        channel="chrome",
        headless=True,
        no_viewport=True,
    )

    page = browser.new_page()

    for region in regions:
        # Skip completed regions
        if region in completed_regions:
            print(f"⏭️ Skipping completed region: {region}")
            continue

        print(f"🎯 Processing region: {region}")

        region_keywords = region.split("-")[0]
        url = f"https://mamikos.com/cari/{region}/all/bulanan/0-15000000?keyword={region_keywords}&suggestion_type=search&rent=2&sort=price,-&price=10000-20000000&singgahsini=0"
        print(url)
        page.goto(url)

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

        for card in cards:
            # Random delay untuk mimic human behavior
            time.sleep(random.uniform(1, 3))

            with page.context.expect_page() as new_page_info:
                card.click()

            new_page = new_page_info.value

            # Check if page is valid (not 403 or error)
            try:
                new_page.wait_for_load_state("networkidle", timeout=10000)

                # Check for 403 or error pages
                if (
                    "403" in new_page.title()
                    or "Forbidden" in new_page.title()
                    or "Error" in new_page.title()
                ):
                    print("❌ Access denied or error page detected, skipping...")
                    new_page.close()
                    continue

            except Exception as e:
                print(f"❌ Page load timeout or error: {e}")
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

            print(f"✅ Extracted: {room_data['nama_kos']} - {room_data['harga']}")
            all_rooms_data.append(room_data)

            # Add: Save data every 50 records for safety
            if len(all_rooms_data) % 50 == 0:
                # Define backup path properly
                script_dir = os.path.dirname(os.path.abspath(__file__))
                data_dir = os.path.join(script_dir, "../data/data-scrape")
                os.makedirs(data_dir, exist_ok=True)
                temp_filename = os.path.join(
                    data_dir, f"data-scrape_backup_{len(all_rooms_data)}.json"
                )

                with open(temp_filename, "w", encoding="utf-8") as f:
                    json.dump(all_rooms_data, f, ensure_ascii=False, indent=2)
                print(f"🔄 Backup saved: {len(all_rooms_data)} records")

            # Random delay before closing and moving to next
            time.sleep(random.uniform(2, 4))
            new_page.close()

        # Add memory cleanup every 5 regions
        if regions.index(region) % 5 == 0 and regions.index(region) > 0:
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
    with sync_playwright() as playwright:
        all_rooms_data = scrape(playwright)

    # Fix: Path ke backend/data/data-scrape
    script_dir = os.path.dirname(os.path.abspath(__file__))
    data_dir = os.path.join(script_dir, "../data/data-scrape")
    os.makedirs(data_dir, exist_ok=True)

    filename = os.path.join(data_dir, "data-scrape.json")

    with open(filename, "w", encoding="utf-8") as f:
        json.dump(all_rooms_data, f, ensure_ascii=False, indent=2)

    print(f"💾 Data saved to: {filename}")
    print(f"📊 Total rooms scraped: {len(all_rooms_data)}")
