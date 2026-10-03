<!-- Repository hero -->

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
  <a href="https://github.com/omkhalane/weather.forecast/network/members">
    <img src="https://img.shields.io/github/forks/omkhalane/weather.forecast?style=for-the-badge&logo=github&label=Forks" alt="GitHub forks" />
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

**Weather Forecast** is a lightweight frontend weather application built with HTML, CSS, and vanilla JavaScript.

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
│   Serverless API Layer   │
│                          │
│   /api/weather           │
│   /api/cities            │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│      OpenWeather API     │
└──────────────────────────┘

OPENWEATHER_API_KEY
        │
        ▼
 Server environment only
```

The browser never receives the OpenWeather API key. Weather requests are routed through serverless functions, which read the credential from the deployment environment.

## Tech Stack

| Layer | Technology |
| --- | --- |
| UI | HTML5, CSS3 |
| Client logic | Vanilla JavaScript |
| Weather data | OpenWeather API |
| Location | Browser Geolocation API |
| Hosting | Vercel-compatible serverless functions |
| Persistence | `sessionStorage` |

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
├── .env.example
├── .gitignore
├── index.html
├── script.js
├── style.css
├── LICENSE
└── README.md
```

## Getting Started

### 1. Clone

```bash
git clone https://github.com/omkhalane/weather.forecast.git
cd weather.forecast
```

### 2. Configure the API key

Create an environment variable named:

```text
OPENWEATHER_API_KEY=your_api_key
```

The key must be configured in the server environment used to deploy the `/api` functions. Do **not** put it inside `script.js`, `index.html`, or any other browser-delivered file.

For local development, keep credentials in an ignored environment file such as `.env.local`.

### 3. Deploy

The repository is structured for a Vercel deployment.

Set `OPENWEATHER_API_KEY` in the project's Environment Variables, then deploy the repository.

> GitHub Pages is a static host and cannot securely store a private OpenWeather credential for browser-side requests. Use the serverless deployment for the application with protected API access.

## Security

The OpenWeather credential has been moved out of the frontend and into a server-side environment variable.

Because the previous credential was publicly committed, it should be treated as compromised and rotated/revoked before using the application in production.

## License

This project is licensed under the [MIT License](./LICENSE).

## Connect

<p align="center">
  <a href="https://github.com/omkhalane">
    <img src="https://img.shields.io/badge/GitHub-omkhalane-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="mailto:om.j.khalane@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-om.j.khalane%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
  </a>
  <a href="https://omkhalane.github.io">
    <img src="https://img.shields.io/badge/Portfolio-omkhalane.github.io-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" />
  </a>
  <a href="https://www.linkedin.com/in/omkhalane/">
    <img src="https://img.shields.io/badge/LinkedIn-Om_Khalane-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
</p>

<p align="center">
  Made with 💙 by <a href="https://github.com/omkhalane">Om Khalane</a>
</p>
