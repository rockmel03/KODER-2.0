import { MapPin } from "lucide-react";

const OtherCities = ({ cities, onCitySelect, getSmallWeatherIcon }) => {
  return (
    <div className="mb-8">
      <h2 className="text-white font-semibold mb-4 text-lg">Other Cities</h2>
      <div className="space-y-3">
        {cities.map((city) => (
          <button
            key={city.name}
            onClick={() => onCitySelect(city.name)}
            className="w-full flex items-center justify-between p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-colors duration-300"
          >
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-white/60 mr-3" />
              <span className="text-white/90 font-medium">{city.name}</span>
            </div>
            <div className="flex items-center">
              <span className="text-white/80 text-sm mr-3">
                {city.temperature}°
              </span>
              <div className="text-white/80">
                {getSmallWeatherIcon(city.icon)}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OtherCities;
