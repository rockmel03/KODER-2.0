import { Sun, Cloud, CloudRain, CloudSnow, Zap } from "lucide-react";

export const getWeatherIcon = (iconType, size = 64) => {
  const iconProps = { size, className: "text-white drop-shadow-lg" };

  switch (iconType) {
    case "sunny":
      return (
        <Sun
          {...iconProps}
          className="text-yellow-300 drop-shadow-lg animate-pulse"
        />
      );
    case "cloudy":
      return <Cloud {...iconProps} className="text-gray-200 drop-shadow-lg" />;
    case "partly-cloudy":
      return <Cloud {...iconProps} className="text-blue-200 drop-shadow-lg" />;
    case "rainy":
      return (
        <CloudRain {...iconProps} className="text-blue-300 drop-shadow-lg" />
      );
    case "snowy":
      return (
        <CloudSnow {...iconProps} className="text-blue-100 drop-shadow-lg" />
      );
    case "thunderstorm":
      return (
        <Zap
          {...iconProps}
          className="text-purple-300 drop-shadow-lg animate-pulse"
        />
      );
    default:
      return <Sun {...iconProps} />;
  }
};

export const getSmallWeatherIcon = (iconType) => {
  const iconProps = { size: 32, className: "text-white/80" };

  switch (iconType) {
    case "sunny":
      return <Sun {...iconProps} className="text-yellow-300" />;
    case "cloudy":
      return <Cloud {...iconProps} className="text-gray-200" />;
    case "partly-cloudy":
      return <Cloud {...iconProps} className="text-blue-200" />;
    case "rainy":
      return <CloudRain {...iconProps} className="text-blue-300" />;
    case "snowy":
      return <CloudSnow {...iconProps} className="text-blue-100" />;
    case "thunderstorm":
      return <Zap {...iconProps} className="text-purple-300" />;
    default:
      return <Sun {...iconProps} />;
  }
};
