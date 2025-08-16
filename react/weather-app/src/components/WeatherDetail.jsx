const WeatherDetail = ({ icon: Icon, value, label }) => {
  return (
    <div className="bg-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
      <Icon className="h-6 w-6 text-white/80 mx-auto mb-2" />
      <div className="text-white text-sm font-medium">{value}</div>
      <div className="text-white/60 text-xs">{label}</div>
    </div>
  );
};

export default WeatherDetail;
