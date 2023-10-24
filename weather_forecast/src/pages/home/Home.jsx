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
        <p>Weather Forecast</p>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
