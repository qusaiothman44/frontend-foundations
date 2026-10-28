const temp = document.querySelector("h2");
const feels = document.querySelector(".feels");
const dec = document.querySelector(".dec");
const icon = document.querySelector(".icon");
const humidity = document.querySelector(".humidity");
const forecast = document.querySelector(".forecast");
const loader = document.querySelector(".loader");
const divError = document.querySelector(".error");
const CityName = document.querySelector("h4");
const speed = document.querySelector(".speed");
const pressure = document.querySelector(".pressure");

export function displayWeather(data, units) {
  console.log(data);
  const unit = units === "metric" ? "°C" : "°F";
  CityName.textContent = data.name;
  temp.textContent = `${Math.round(data.main.temp)} ${unit}`;
  feels.textContent = `Feels Like ${Math.round(data.main.feels_like)} ${unit}`;
  dec.textContent = data.weather[0].description;
  humidity.textContent = `humidity ${data.main.humidity}%`;
  speed.textContent = `Wind ${data.wind.speed}`;
  pressure.textContent = `Pressure ${data.main.pressure} hPa`;
  icon.innerHTML = `
        <img
            src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
            alt="${data.weather[0].description}"
        >
    `;
}

export function displayForecast(data) {
  const result = data.list.filter((item) => item.dt_txt.includes("12:00:00"));

  forecast.innerHTML = result
    .map((item) => {
      const date = new Date(item.dt_txt);

const day = date.toLocaleDateString("en-US", {
  weekday: "short",
});

const formattedDate = date.toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
});

      return `
            <div class="forecast-card">
                <p>${day} <br>${formattedDate}</p>
                <p> <img
            src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png"
            alt="${item.weather[0].description}"
        ></p>
                <p>${Math.round(item.main.temp)}°</p>
                <p>${item.weather[0].description}</p>
            </div>
        `;
    })
    .join("");
}

export function showLoading(isLoading) {
  loader.style.display = isLoading ? "block" : "none";
}

export function showError(message) {
  divError.style.display= "block";
  divError.textContent = message;
}

export function clearError() {
    divError.style.display= "none";
  divError.textContent = "";
}
