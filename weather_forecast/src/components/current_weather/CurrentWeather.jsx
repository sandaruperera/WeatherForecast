import React, { useEffect, useState } from 'react';
import LocationIcon from '../../assets/location.svg';
import ClearImage from '../../assets/clear.png';
import ThunderIcon from '../../assets/thunder_rain.png';
import SnowIcon from '../../assets/snow.png';
import Showericon from '../../assets/shower_rain.png';
import ScatteredIcon from '../../assets/scattered_clouds.png';
import RainIcon from '../../assets/rain.png';
import MistIcon from '../../assets/mist.png';
import FewCloudIcon from '../../assets/f_clouds.png';
import BrokenCloudIcon from '../../assets/broken_clouds.png';


import './CurrentWeather.css'

const CurrentWeather = ({current}) => {
  if (!current) {
    return <div>Loading...</div>;
  }
  const [weatherIcon, setWeatherIcon] = useState(ClearImage);
  useEffect(()=>{
    if(current.weather[0].icon==="01d" || current.weather[0].icon==="01n"){
      setWeatherIcon(ClearImage);
    }
    else if(current.weather[0].icon==="02d" || current.weather[0].icon==="02n"){
      setWeatherIcon(FewCloudIcon);
    }
    else if(current.weather[0].icon==="03d" || current.weather[0].icon==="03n"){
      setWeatherIcon(ScatteredIcon);
    }
    else if(current.weather[0].icon==="04d" || current.weather[0].icon==="04n"){
      setWeatherIcon(BrokenCloudIcon);
    }
    else if(current.weather[0].icon==="09d" || current.weather[0].icon==="09n"){
      setWeatherIcon(Showericon);
    }
    else if(current.weather[0].icon==="10d" || current.weather[0].icon==="10n"){
      setWeatherIcon(RainIcon);
    }
    else if(current.weather[0].icon==="11d" || current.weather[0].icon==="11n"){
      setWeatherIcon(ThunderIcon);
    }
    else if(current.weather[0].icon==="13d" || current.weather[0].icon==="13n"){
      setWeatherIcon(SnowIcon);
    }
    else if(current.weather[0].icon==="50d" || current.weather[0].icon==="50n"){
      setWeatherIcon(MistIcon);
    }
  },[])
  
  return (
    <div className="container">
        <div className="weather_data">
            <p className="temperature">{current.main.temp} °C</p>
            <div className="location">
                <img src={LocationIcon} alt=''/>
                <p className='location-text'>{current.name}</p>
            </div>
            <p className='description'>{current.weather[0].description}</p>
            <div className="feels-like">
            <p>Feels Like :</p>
            <p>{current.main.feels_like} °C</p>
            </div>
        </div>
        <div className="weather-image">
            <img src={weatherIcon} alt=''/>
        </div>
    </div>
  )
}

export default CurrentWeather