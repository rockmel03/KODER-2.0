const TemperatureToggle = ({ isCelsius, onToggle }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="bg-white/20 backdrop-blur-md rounded-full p-1 border border-white/30">
        <div className="flex">
          <button
            onClick={() => onToggle(true)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isCelsius
                ? "bg-white text-purple-600 shadow-lg"
                : "text-white/80 hover:text-white"
            }`}
          >
            °C
          </button>
          <button
            onClick={() => onToggle(false)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              !isCelsius
                ? "bg-white text-purple-600 shadow-lg"
                : "text-white/80 hover:text-white"
            }`}
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemperatureToggle;
