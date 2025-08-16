import { useState } from "react";
import weatherData from "../data/wetherData.json";
import WeatherHeader from "./WeatherHeader";
import SearchBar from "./SearchBar";
import TemperatureToggle from "./TemperatureToggle";
import WeatherCard from "./WeatherCard";
import OtherCities from "./OtherCities";
import { getWeatherIcon, getSmallWeatherIcon } from "../utils/weatherIcons.jsx";

const WeatherApp = () => {
  const [isCelsius, setIsCelsius] = useState(true);
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [searchQuery, setSearchQuery] = useState("");

  const currentWeather = weatherData[selectedCity];

  const convertTemp = (temp) => {
    return isCelsius ? temp.c : temp.f;
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    // In a real app, you would filter cities based on the search query
    // For now, we'll just log it
    console.log("Searching for:", query);
  };

  const handleCitySelect = (cityName) => {
    setSelectedCity(cityName);
  };

  // Prepare other cities data
  const otherCities = Object.entries(weatherData)
    .filter(([city]) => city !== selectedCity)
    .map(([city, data]) => ({
      name: city,
      temperature: isCelsius ? data.temperature.c : data.temperature.f,
      icon: data.icon,
    }));

  // Filter other cities based on search query
  const filteredOtherCities = otherCities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-400 via-zinc-500 to-zinc-600 p-4 font-sans">
      <div className="max-w-md mx-auto">
        <WeatherHeader />

        <SearchBar onSearch={handleSearch} />

        <TemperatureToggle isCelsius={isCelsius} onToggle={setIsCelsius} />

        {currentWeather && (
          <WeatherCard
            city={selectedCity}
            weather={currentWeather}
            isCelsius={isCelsius}
            convertTemp={convertTemp}
            getWeatherIcon={getWeatherIcon}
          />
        )}

        <OtherCities
          cities={filteredOtherCities}
          onCitySelect={handleCitySelect}
          getSmallWeatherIcon={getSmallWeatherIcon}
        />
      </div>
    </div>
  );
};

export default WeatherApp;
