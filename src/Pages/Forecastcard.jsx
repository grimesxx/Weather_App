const ForecastCard = (props) => {
  return (
    <div className="forecast-card">
      <p>{props.day}</p>

      <img src={props.icon} alt={props.weather} />

      <p>{props.temperature}°C</p>

      <p>{props.weather}</p>
    </div>
  );
};

export default ForecastCard;