import ForecastCard from './Forecastcard';
import cloudy from "../assets/cloudy.png";

import mostly from '../assets/mostly.png'
import snowy from '../assets/snowy.png'
import sunny from '../assets/sunny.png'
import Thunder from '../assets/Thunder.png'
import storm from '../assets/storm.png'
import Windy from '../assets/Windy.png'
import rainy from '../assets/rainy-day.png'
import wind from '../assets/wind.png'
import fog from '../assets/fog.png'
import { useState, useEffect } from "react";


// 

const Forecast = () => {
  const [forecast, setForecast] = useState([]);
  const url = "https://api.open-meteo.com/v1/forecast?latitude=27.7172&longitude=85.3240&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto"; useEffect(() => { 
  const getForecast = async () => {
    try { const response = await fetch(url); 
    const data = await response.json(); 
    console.log(data); 
    setForecast(data.daily.time.map((date, index) => ({ 
      day: date,
      temperature: data.daily.temperature_2m_max[index], 
      weatherCode: data.daily.weather_code[index] 
    }
  )
)); } catch (error) {
   console.log(error);
   } }; getForecast(); }, []); 
   const getIcon = (code) => {
     if (code === 0) 
      return sunny;
      if (code === 1 || code === 2) 
        return mostly;
       if (code === 3) 
      return cloudy; 
    if (code >= 45 && code <= 48)
       return fog;
       if (code >= 51 && code <= 67)
         return rainy;
         if (code >= 71 && code <= 77) 
          return snowy; 
        if (code >= 80 && code <= 82) 
        return rainy;
          if (code >= 95) 
            return Thunder;
           return cloudy; 
          };
          
          const getWeather = (code) => {
             if (code === 0) return "Sunny"; 
             if (code === 1 || code === 2) 
              return "Mostly Cloudy"; 
            if (code === 3) return "Cloudy"; if (code >= 45 && code <= 48) return "Foggy"; 
            if (code >= 51 && code <= 67)
               return "Rainy"; if (code >= 71 && code <= 77)
               return "Snowy"; if (code >= 80 && code <= 82) 
                return "Rainy"; if (code >= 95)
                   return "Thunderstorm";
             return "Cloudy"; }; 
            return (
               <div className="forecast">
                 {forecast.map((item, index) => ( 
                  <ForecastCard 
                  key={index}
                  day={item.day}
                  icon={getIcon(item.weatherCode)} 
                  temperature={item.temperature}
                  weather={getWeather(item.weatherCode)} 
                  />
                 ))} 
                 </div>
                  );
                 };
                 export default Forecast;
                 