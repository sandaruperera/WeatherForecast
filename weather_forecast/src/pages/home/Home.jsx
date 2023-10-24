import React from "react";
import "./Home.css";
import { CurrentWeather, SearchWeather, Card } from "../../components";
const Home = () => {
  return (
    <div className="home-container">
      <div className="current-weather">
        <CurrentWeather />
        <SearchWeather />
      </div>
      <div className="forecast-weather">
        <hr className="divider"/>
        <p className="forecast-weather-title">Weather Forecast</p>
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
