from playwright.sync_api import sync_playwright
import time

from regions import regions


def scrape(playwright):
    browser = playwright.chromium.launch_persistent_context(
        user_data_dir=r"C:\playwright",
        channel="chrome",
        headless=False,
        no_viewport=True,
    )

    page = browser.new_page()

    for region in regions:
        region_keywords = region.split("-")[0]
        page.goto(
            f"https://mamikos.com/cari/{region}/all/bulanan/0-15000000/158"
            f"?keyword={region_keywords}&suggestion_type=search&rent=2&sort=price,-&price=10000-20000000"
        )

        for more_rooms in range(3):
            page.wait_for_selector("button.nominatim-list__see-more")

            button = page.get_by_role(
                "button", name="Lihat lebih banyak lagi", exact=False
            )
            button.scroll_into_view_if_needed()
            button.click()
            time.sleep(1)

        # Example: Interact with the element using Playwright instead of getEventListeners
        # You can extract attributes or perform actions as needed, e.g.:
        kost_rc_element = page.query_selector(".kost-rc")
        # Do something with kost_rc_element, e.g., print its text content
        if kost_rc_element:
            print(kost_rc_element.text_content())

        time.sleep(2)

    browser.close()


if __name__ == "__main__":
    with sync_playwright() as playwright:
        scrape(playwright)
