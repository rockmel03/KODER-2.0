const form = document.querySelector("form");
const resultContainer = document.querySelector("#results-container");

let isLoading = false;

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const searchInput = this.querySelector("input");
  const query = searchInput.value;
  if (!query) return;

  isLoading = true;
  resultContainer.innerHTML = "";
  const msgElem = document.createElement("div");
  msgElem.textContent = "Searching...";
  msgElem.className = "text-center text-gray-500 mt-4";
  resultContainer.appendChild(msgElem);

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=af84123c4fcefb11de68919bdb910227`;
    const res = await fetch(url);
    const data = await res.json();

    if (data?.cod === 200) {
      renderResult(data);
    } else {
      throw new Error(`Failed to fetch data of "${query}"`);
    }
  } catch (error) {
    console.log(error);

    resultContainer.innerHTML = "";
    msgElem.classList.add("text-red-500");
    msgElem.textContent = error.message || "Failed to fetch data";
    resultContainer.appendChild(msgElem);
  } finally {
    isLoading = false;
  }
});

function renderResult(data) {
  resultContainer.innerHTML = "";

  const card = document.createElement("div");
  card.className = "bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mt-6";

  const city = document.createElement("h2");
  city.className = "text-2xl font-bold mb-2 text-gray-800";
  city.textContent = `${data.name}, ${data.sys.country}`;
  card.appendChild(city);

  const weatherRow = document.createElement("div");
  weatherRow.className = "flex items-center mb-4";

  const icon = document.createElement("img");
  icon.className = "w-12 h-12 mr-3";
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  icon.alt = data.weather[0].description;

  const desc = document.createElement("span");
  desc.className = "text-lg text-gray-700 capitalize";
  desc.textContent = data.weather[0].description;

  weatherRow.appendChild(icon);
  weatherRow.appendChild(desc);
  card.appendChild(weatherRow);

  const temp = document.createElement("div");
  temp.className = "text-4xl font-semibold text-blue-600 mb-2";
  temp.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
  card.appendChild(temp);

  const info = document.createElement("div");
  info.className = "text-gray-600 space-y-1";
  info.innerHTML = `
        <div>Feels like: <span class="font-medium">${Math.round(
          data.main.feels_like - 273.15
        )}°C</span></div>
        <div>Humidity: <span class="font-medium">${
          data.main.humidity
        }%</span></div>
        <div>Wind: <span class="font-medium">${data.wind.speed} m/s</span></div>
        <div>Pressure: <span class="font-medium">${
          data.main.pressure
        } hPa</span></div>
    `;
  card.appendChild(info);

  resultContainer.appendChild(card);
}
