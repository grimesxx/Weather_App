
import './Weather.css'
import searchIcon from '../assets/searchIcon.png'
import cloudy from '../assets/cloudy.png'
import mostly from '../assets/mostly.png'
import snowy from '../assets/snowy.png'
import sunny from '../assets/sunny.png'
import Thunder from '../assets/Thunder.png'
import storm from '../assets/storm.png'
import Windy from '../assets/Windy.png'
import rainy from '../assets/rainy-day.png'
import wind from '../assets/wind.png'
import fog from '../assets/fog.png'
import { useEffect, useState, useRef } from 'react'



const Weather = () => {
  const inputRef = useRef()

const icons = {
  "01d": sunny,
  "01n":sunny,
  "02d":mostly,
  "02n":mostly,
  "03d":cloudy,
  "03n":cloudy,
  "04d":cloudy,
  "04n":cloudy,
  "09d":rainy,
  "09n":rainy,
  "10d":rainy,
  "10n":rainy,
  "11d":Thunder,
  "11n":Thunder,
  "13d":snowy,
  "13n":snowy,
  "50d":fog,
  "50n":fog,
}

  const [weatherData, setWeatherData] = useState(false);
  

  const search = async(city) => {
    

    if(city === ""){
      alert("Enter the city name");
      return;
    }
    try {
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok){
        alert("city not found");
      }
      console.log(data)
      const icon = icons[data.weather[0].icon]
      setWeatherData({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,

        temperature: Math.floor(data.main.temp), 
        location: data.name,
        icon: icon
      })
      
    } catch (error) {
      console.log(error);
      
    }
    
  }
  useEffect (()=>{
    search("New York");
  }, [])
 
  return (
    <div className='weather'>
        <div className= 'search-bar'>
           
            <input ref={inputRef} type='text' placeholder='Search'/>
            <img src = {searchIcon} onClick={()=>search(inputRef.current.value)}/>
            

        </div>
        
          <img src= {weatherData.icon} className='weather-icon'/>
           <p className='temperature'>{weatherData.temperature}</p>
          <p className='location'>{weatherData.location}</p>
          <div className='weather-data'>
            <div className='col'>
              <span>H:{weatherData.humidity}</span>

            </div>
            <div className='col'>
              <img src = {wind}/>
              
              <span>{weatherData.windspeed}</span>
              

            </div>
            
          </div>

        
        

        
    </div>
  )
}

export default Weather