import { getWeatherData, getForecastData } from "./api.js";

import {
  displayWeather,
  displayForecast,
  showLoading,
  showError,
  clearError,
} from "./ui.js";

const CityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");
const citesDiv = document.querySelector(".cities");
let currentCity = "";

async function getCity(city) {
  if (!city) {
    showError("Please enter a city name");
    return;
  }

  const selected = document.querySelector('input[name="unit"]:checked');

  const units = selected.value === "celsius" ? "metric" : "imperial";

  showLoading(true);
  clearError();

  try {
    const weather = await getWeatherData(city, units);
    const forecast = await getForecastData(city, units);

    currentCity = weather.name;

    displayWeather(weather, units);
    displayForecast(forecast);
     saveLocalStorage(weather.name);
getCities();
  } catch (error) {
    showError(error.message);
  } finally {
    showLoading(false);
  }
 
}

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  getCity(CityInput.value.trim());
});

document.querySelectorAll('input[name="unit"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    if (currentCity) {
      getCity(currentCity);
    }
  });
});


function saveLocalStorage(city) {
    let cities = JSON.parse(localStorage.getItem("cities")) || [];
    cities = cities.filter(
        c => c.toLowerCase() !== city.toLowerCase()
    );
    cities.unshift(city);
    cities = cities.slice(0, 5);

    localStorage.setItem("cities", JSON.stringify(cities));
}

function getCities() {
    const cities = JSON.parse(localStorage.getItem("cities")) || [];

    citesDiv.innerHTML = "";

    cities.forEach(city => {
        const pastCity = document.createElement("div");
        pastCity.classList.add("past-city");
        pastCity.textContent = city;

        pastCity.addEventListener("click", () => {
            CityInput.value = city;
            getCity(city);
        });

        citesDiv.appendChild(pastCity);
    });
}