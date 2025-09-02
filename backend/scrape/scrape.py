from playwright.sync_api import sync_playwright
import time


def scrape(playwright):
    browser = playwright.chromium.launch_persistent_context(
        user_data_dir="C:\playwright",
        channel="chrome",
        headless=False,
        no_viewport=True,
    )

    page = browser.new_page()

    page.goto(
        f"https://mamikos.com/cari/semarang-kota-semarang-jawa-tengah-indonesia/all/bulanan/0-15000000/158?keyword=semarang&suggestion_type=search&rent=2&sort=price,-&price=10000-20000000&singgahsini=0"
    )
