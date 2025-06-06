# Simple GitHub Pages Site

This repository hosts a small static website for GitHub Pages.

The site now includes a basic client-side registration and login flow:

* `index.html` – landing page with links to register or log in.
* `register.html` – create a new account (stored in `localStorage`).
* `login.html` – authenticate using your stored credentials.
* `dashboard.html` – user cabinet with settings and live price pairs.

Credentials are saved locally in the browser and are **not** secure; this setup is purely for demonstration.

The dashboard now provides a drop-down list of ten popular trading pairs, such as `BTCUSDT` or `ETHUSDT`. The selected pair's price is fetched from both Binance and Bybit via a CORS proxy and refreshes every 10 seconds.

A workflow in `.github/workflows/gh-pages.yml` automatically deploys the site whenever changes are pushed to the `master` branch.
