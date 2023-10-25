import { useState, useEffect } from "react";
import "./Home.css";
import { CurrentWeather, SearchWeather, Card } from "../../components";
import { searchWeatherData, fetchWeatherForecast } from "../../api/apiClient";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const [cityWeather, setCityWeather] = useState(null);
  const [latitude, setLatitude] = useState(6.9271);
  const [longitude, setLongitude] = useState(79.8612);
  const [forecastData, setForecastData] = useState(null);
  const navigate = useNavigate();
  const handleSearch = ({ latitude, longitude }) => {
    setLatitude(latitude);
    setLongitude(longitude);
    searchWeatherData(latitude, longitude).then((data) => {
      setCityWeather(data);
    });
    fetchForecastData(latitude, longitude);
  };

  const fetchForecastData = (latitude, longitude) => {
    fetchWeatherForecast(latitude, longitude).then((data) => {
      const today = new Date().toISOString().split("T")[0];
      const groupedData = data.list.reduce((acc, weatherData) => {
        const date = weatherData.dt_txt.split(" ")[0];

        if (date > today) {
          acc[date] = acc[date] || [];
          acc[date].push(weatherData);
        }

        return acc;
      }, {});

      const groupedDataArray = Object.entries(groupedData).map(
        ([date, data]) => ({
          date,
          data,
        })
      );
      setForecastData(groupedDataArray);
    });
  };
  useEffect(() => {
    searchWeatherData(latitude, longitude).then((data) => {
      setCityWeather(data);
    });
    fetchForecastData(latitude, longitude);
  }, []);
  return (
    <div className="home-container">
      <p className="home-title">Weather Wizard</p>
      <div className="current-weather">
        <CurrentWeather current={cityWeather} />
        <SearchWeather onSearch={handleSearch} />
      </div>
      <div className="forecast-weather">
        <hr className="forecast-weather-divider" />
        <div className="forecast-weather-top">
          <p className="forecast-weather-title">Weather Forecast</p>
          {console.log("forecastData before navigation:", forecastData)}
          <Link to="/WeatherForecast/home/more" state={{data: forecastData}} >
          <button className="view-more">
            View More
          </button>
            </Link> 
          
        </div>
        <div className="forecast-cards">
          {forecastData ? (
            forecastData
              .slice(0, 3)
              .map((group) => (
                <Card
                  key={group.date}
                  date={group.date}
                  temp={group.data[0].main.temp}
                  description={group.data[0].weather[0].description}
                  humidity={group.data[0].main.humidity}
                  icon={group.data[0].weather[0].icon}
                />
              ))
          ) : (
            <p>Loading forecast data...</p>
          )}
        </div>
        <hr className="forecast-weather-divider" />
      </div>
    </div>
  );
};

export default Home;
