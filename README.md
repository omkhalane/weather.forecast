<p align="center">
  <img src="./images/weather-app.png" alt="Weather Forecast" width="120" />
</p>

<h1 align="center">Weather Forecast</h1>

<p align="center">
  A clean, responsive weather application for real-time conditions by location or city.
</p>

<p align="center">
  <a href="https://github.com/omkhalane/weather.forecast">
    <img src="https://img.shields.io/github/stars/omkhalane/weather.forecast?style=for-the-badge&logo=github&label=Stars" alt="GitHub stars" />
  </a>
  <img src="https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111827" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/OpenWeather-API-EB6E4B?style=for-the-badge" alt="OpenWeather API" />
  <img src="https://img.shields.io/badge/License-MIT-2563EB?style=for-the-badge" alt="MIT License" />
</p>

<p align="center">
  <a href="https://github.com/omkhalane/weather.forecast/issues">Issues</a>
  ·
  <a href="https://github.com/omkhalane/weather.forecast/pulls">Pull Requests</a>
</p>

---

## About

**Weather Forecast** is a lightweight weather application built with HTML, CSS, and vanilla JavaScript.

It provides current weather conditions for the user's location or a searched city, with a simple interface designed to stay fast, readable, and dependency-free.

## Features

- 🌍 Location-aware weather using the browser Geolocation API
- 🔎 City search with API-powered suggestions
- 🌡️ Current temperature and weather conditions
- 💨 Wind speed, humidity, and cloud coverage
- ⚡ Lightweight vanilla JavaScript implementation
- 📱 Responsive layout for desktop and mobile
- 💾 Session-based location persistence

## Preview

<p align="center">
  <img src="./images/weather-app.png" alt="Weather Forecast preview" width="760" />
</p>

## Architecture

```text
┌──────────────────────────┐
│        Web Browser       │
│                          │
│  Geolocation  +  Search  │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│    Weather API Layer     │
│                          │
│   /api/weather           │
│   /api/cities            │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│      OpenWeather API     │
└──────────────────────────┘
```

## Tech Stack

| Layer | Technology |
| --- | --- |
| UI | HTML5, CSS3 |
| Client logic | Vanilla JavaScript |
| Weather data | OpenWeather API |
| Location | Browser Geolocation API |
| Persistence | `sessionStorage` |
| Static hosting | GitHub Pages |
| Serverless hosting | Vercel-compatible functions |

## Project Structure

```text
weather.forecast/
├── api/
│   ├── cities.js
│   └── weather.js
├── images/
│   ├── cloud.png
│   ├── humidity.png
│   ├── loading.gif
│   ├── location.png
│   ├── search.png
│   ├── weather-app.png
│   └── wind.png
├── config.js
├── index.html
├── script.js
├── style.css
├── LICENSE
└── README.md
```

## Getting Started

### Clone

```bash
git clone https://github.com/omkhalane/weather.forecast.git
cd weather.forecast
```

### GitHub Pages

GitHub Pages is a static host. It cannot keep a browser-delivered weather credential private.

For Pages, use a credential intended for client-side use and restrict it as tightly as your OpenWeather account allows. Do not use an unrestricted production credential.

For deployments that support server-side environment variables, the included `api/` routes keep the credential on the server.

### GitHub Pages setup

Open **Settings → Pages** and choose:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

## License

This project is licensed under the [MIT License](./LICENSE).

## Connect

<p align="center">
  <a href="https://github.com/omkhalane" aria-label="GitHub" title="GitHub">
    <img src="https://cdn.simpleicons.org/github/181717" width="30" alt="" />
  </a>
  &nbsp;&nbsp;
  <a href="mailto:om.j.khalane@gmail.com" aria-label="Email" title="Email">
    <img src="https://cdn.simpleicons.org/gmail/EA4335" width="30" alt="" />
  </a>
  &nbsp;&nbsp;
  <a href="https://omkhalane.github.io" aria-label="Portfolio" title="Portfolio">
    <img src="https://cdn.simpleicons.org/googlechrome/2563EB" width="30" alt="" />
  </a>
  &nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/omkhalane/" aria-label="LinkedIn" title="LinkedIn">
    <img src="https://cdn.simpleicons.org/linkedin/0A66C2" width="30" alt="" />
  </a>
</p>

<p align="center">
  Made with 💙 by <a href="https://github.com/omkhalane">@omkhalane</a>
</p>
