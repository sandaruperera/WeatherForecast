import React from 'react'
import LocationIcon from '../../assets/location.svg'
import ClearImage from '../../assets/clear.png'
import './CurrentWeather.css'

const CurrentWeather = ({current}) => {
  if (!current) {
    return <div>Loading...</div>;
  }
  
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
            <img src={ClearImage} alt=''/>
        </div>
    </div>
  )
}

export default CurrentWeather