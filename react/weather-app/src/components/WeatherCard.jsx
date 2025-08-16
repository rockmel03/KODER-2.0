import { Droplets, Eye, MapPin, Wind } from "lucide-react";
import WeatherDetail from "./WeatherDetail";

const WeatherCard = ({ city, weather, getWeatherIcon, convertTemp }) => {
  return (
    <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 mb-8 border border-white/30 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <MapPin className="h-5 w-5 text-white/80 mr-2" />
          <span className="text-white/80 text-sm font-medium">{city}</span>
        </div>
        <div className="text-white/60 text-sm">Today</div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-6xl font-bold text-white mb-2">
            {convertTemp(weather.temperature)}°
          </div>
          <div className="text-white/80 text-lg">{weather.condition}</div>
        </div>
        <div className="transform hover:scale-110 transition-transform duration-300">
          {getWeatherIcon(weather.icon)}
        </div>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-3 gap-4">
        <WeatherDetail
          icon={Eye}
          value={`${weather.visibility}km`}
          label="Visibility"
        />
        <WeatherDetail
          icon={Droplets}
          value={`${weather.humidity}%`}
          label="Humidity"
        />
        <WeatherDetail
          icon={Wind}
          value={`${weather.windSpeed}km/h`}
          label="Wind"
        />
      </div>
    </div>
  );
};

export default WeatherCard;
