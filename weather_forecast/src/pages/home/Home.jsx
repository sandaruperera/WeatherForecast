import { useState, useEffect } from "react";
import "./Home.css";
import { CurrentWeather, SearchWeather, Card } from "../../components";
import { fetchCityWeather, searchWeatherData ,fetchWeatherForecast } from '../../api/apiClient'
const Home = () => {
  const [cityWeather, setCityWeather] = useState(null);
  const [latitude, setLatitude] = useState(6.9271);
  const [longitude , setLongitude ] = useState(79.8612);

  useEffect(()=>{
    searchWeatherData(latitude,longitude)
    .then((data)=>{
      setCityWeather(data);
    })
  },[])
  return (
    <div className="home-container">
      <div className="current-weather">
        <CurrentWeather current ={cityWeather} />
        <SearchWeather />
      </div>
      <div className="forecast-weather">
        <hr className="forecast-weather-divider" />
        <div className="forecast-weather-top">
          <p className="forecast-weather-title">Weather Forecast</p>
          <button className="view-more">View More</button>
        </div>
        <div className="forecast-cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
