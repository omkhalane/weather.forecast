const API_BASE = "/api";

// Elements
const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const searchForm = document.querySelector("[data-searchForm]");
const userInfoContainer = document.querySelector(".userInfoContainer");
const grantAccessContainer = document.querySelector(".grantLocationContainer");
const loadingContainer = document.querySelector(".loadingContainer");
const notFound = document.querySelector(".errorContainer");
const errorText = document.querySelector("[data-errorText]");
const searchInput = document.querySelector("[data-searchInput]");
const suggestionsList = document.createElement("ul");

searchInput.parentNode.appendChild(suggestionsList);

let currentTab = userTab;
currentTab.classList.add("currentTab");
getFromSessionStorage();

// Switch tabs
function switchTab(newTab) {
    notFound.classList.remove("active");

    if (currentTab !== newTab) {
        currentTab.classList.remove("currentTab");
        currentTab = newTab;
        currentTab.classList.add("currentTab");

        if (newTab === searchTab) {
            searchForm.classList.add("active");
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
        } else {
            searchForm.classList.remove("active");
            userInfoContainer.classList.add("active");
            grantAccessContainer.classList.remove("active");
            getFromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => switchTab(userTab));
searchTab.addEventListener("click", () => switchTab(searchTab));

// Get weather from session storage
function getFromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("userCoordinates");

    if (!localCoordinates) {
        grantAccessContainer.classList.add("active");
        return;
    }

    try {
        const coordinates = JSON.parse(localCoordinates);
        fetchWeatherInfo(coordinates);
    } catch {
        sessionStorage.removeItem("userCoordinates");
        grantAccessContainer.classList.add("active");
    }
}

// Fetch JSON from the serverless API
async function fetchJson(url) {
    const response = await fetch(url);

    let data = {};
    try {
        data = await response.json();
    } catch {
        data = {};
    }

    if (!response.ok) {
        throw new Error(data.error || "Unable to complete the request.");
    }

    return data;
}

// Fetch weather info
async function fetchWeatherInfo(coordinates) {
    loadingContainer.classList.add("active");
    notFound.classList.remove("active");

    try {
        const data = await fetchJson(
            `${API_BASE}/weather?lat=${encodeURIComponent(coordinates.lat)}&lon=${encodeURIComponent(coordinates.lon)}`
        );

        userInfoContainer.classList.add("active");
        displayWeather(data);
    } catch (error) {
        showError(error.message);
    } finally {
        loadingContainer.classList.remove("active");
    }
}

// Display weather data
function displayWeather(data) {
    const { name, sys, weather, main, wind, clouds } = data;

    document.querySelector("[data-cityName]").textContent = name || "Unknown location";
    document.querySelector("[data-countryFlag]").src =
        sys?.country ? `https://flagcdn.com/w320/${sys.country.toLowerCase()}.png` : "";
    document.querySelector("[data-weatherDesc]").textContent =
        weather?.[0]?.description || "Weather unavailable";
    document.querySelector("[data-weatherIcon]").src =
        weather?.[0]?.icon
            ? `https://openweathermap.org/img/wn/${weather[0].icon}.png`
            : "";
    document.querySelector("[data-temp]").textContent =
        main?.temp !== undefined ? `${Math.round(main.temp)}°C` : "--";
    document.querySelector("[data-windspeed]").textContent =
        wind?.speed !== undefined ? `Wind: ${wind.speed} m/s` : "Wind: --";
    document.querySelector("[data-humidity]").textContent =
        main?.humidity !== undefined ? `Humidity: ${main.humidity}%` : "Humidity: --";
    document.querySelector("[data-clouds]").textContent =
        clouds?.all !== undefined ? `Clouds: ${clouds.all}%` : "Clouds: --";
}

// Show error message
function showError(message) {
    const target = errorText || notFound;
    target.textContent = message || "Something went wrong.";
    notFound.classList.add("active");
}

// Grant location access
document.querySelector("[data-grantAccess]").addEventListener("click", getLocation);

function getLocation() {
    if (!navigator.geolocation) {
        showError("Geolocation is not supported by this browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(showPosition, () => {
        showError("Unable to access your location. Please check browser permissions.");
    });
}

function showPosition(position) {
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    };

    sessionStorage.setItem("userCoordinates", JSON.stringify(userCoordinates));
    grantAccessContainer.classList.remove("active");
    fetchWeatherInfo(userCoordinates);
}

// Search autocomplete functionality
let searchTimer;

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();

    clearTimeout(searchTimer);
    suggestionsList.innerHTML = "";

    if (query.length < 3) {
        return;
    }

    searchTimer = setTimeout(async () => {
        try {
            const data = await fetchJson(
                `${API_BASE}/cities?q=${encodeURIComponent(query)}`
            );

            (data.list || []).slice(0, 5).forEach((city) => {
                const listItem = document.createElement("li");
                listItem.textContent = `${city.name}, ${city.sys.country}`;
                listItem.addEventListener("click", () => selectCity(city));
                suggestionsList.appendChild(listItem);
            });
        } catch (error) {
            console.error(error);
        }
    }, 300);
});

// Handle city selection
function selectCity(city) {
    searchInput.value = `${city.name}, ${city.sys.country}`;
    suggestionsList.innerHTML = "";
    fetchWeatherInfo({
        lat: city.coord.lat,
        lon: city.coord.lon,
    });
}
