# Simple GitHub Pages Site

This repository hosts a small static website for GitHub Pages.

The site now includes a basic client-side registration and login flow:

* `index.html` &ndash; landing page with links to register or log in.
* `register.html` &ndash; create a new account (stored in `localStorage`).
* `login.html` &ndash; authenticate using your stored credentials.
* `dashboard.html` &ndash; user cabinet with settings and live price pairs.

Credentials are saved locally in the browser and are **not** secure; this setup is purely for demonstration.

The dashboard now lets you choose a trading pair (e.g. `BTCUSDT`) and monitors its
price on both Binance and Bybit. Prices refresh every 10 seconds using public exchange
APIs.

A workflow in `.github/workflows/gh-pages.yml` automatically deploys the site whenever changes are pushed to the `master` branch.
