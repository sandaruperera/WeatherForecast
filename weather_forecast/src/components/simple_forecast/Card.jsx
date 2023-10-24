import React, { useState , useEffect} from "react";
import "./Card.css";
import ClearImage from "../../assets/clear.png";
import ThunderIcon from '../../assets/thunder_rain.png';
import SnowIcon from '../../assets/snow.png';
import Showericon from '../../assets/shower_rain.png';
import ScatteredIcon from '../../assets/scattered_clouds.png';
import RainIcon from '../../assets/rain.png';
import MistIcon from '../../assets/mist.png';
import FewCloudIcon from '../../assets/f_clouds.png';
import BrokenCloudIcon from '../../assets/broken_clouds.png';

const Card = ({date, temp, description,icon,humidity}) => {

  const [weatherIcon, setWeatherIcon] = useState(ClearImage);
  useEffect(()=>{
    if(icon==="01d" || icon==="01n"){
      setWeatherIcon(ClearImage);
    }
    else if(icon==="02d" ||icon==="02n"){
      setWeatherIcon(FewCloudIcon);
    }
    else if(icon==="03d" || icon==="03n"){
      setWeatherIcon(ScatteredIcon);
    }
    else if(icon==="04d" || icon==="04n"){
      setWeatherIcon(BrokenCloudIcon);
    }
    else if(icon==="09d" || icon==="09n"){
      setWeatherIcon(Showericon);
    }
    else if(icon==="10d" || icon==="10n"){
      setWeatherIcon(RainIcon);
    }
    else if(icon==="11d" || icon==="11n"){
      setWeatherIcon(ThunderIcon);
    }
    else if(icon==="13d" || icon==="13n"){
      setWeatherIcon(SnowIcon);
    }
    else if(icon==="50d" ||icon==="50n"){
      setWeatherIcon(MistIcon);
    }
  },[icon])
  return (
    <div className="card-container">
      <p className="day">{date}</p>
      <img src={weatherIcon} alt="" />
      <p className="card-temperature">{temp} °C</p>
      <p className="card-description">{description}</p>
      <p className="card-humidity">Humidity: {humidity} %</p>
    </div>
  );
};

export default Card;
