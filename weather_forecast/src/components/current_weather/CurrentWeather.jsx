import React from 'react'
import LocationIcon from '../../assets/location.svg'
import ClearImage from '../../assets/clear.png'
import './CurrentWeather.css'

const CurrentWeather = () => {
  return (
    <div className="container">
        <div className="weather_data">
            <p className="temperature">30°C</p>
            <div className="location">
                <img src={LocationIcon} alt=''/>
                <p className='location-text'>Colombo</p>
            </div>
            <p className='description'>Broken Clouds</p>
            <div className="feels-like">
            <p>Feels Like :</p>
            <p>25.03</p>
            </div>
        </div>
        <div className="weather-image">
            <img src={ClearImage} alt=''/>
        </div>
    </div>
  )
}

export default CurrentWeather