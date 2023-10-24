import React, { useEffect, useState } from 'react'
import './ViewMore.css'
import { Card } from '../../components'
import { useLocation } from 'react-router-dom';

const ViewMore = () => {
    
    const location = useLocation();
    const forecastData = location.state.data;
  useEffect(() => {
    console.log("Received data:", location.state);
    
  }, [location.state]);
  return (
    <div className='view-more-container'>
        <p className='view-more-title'>Weather Forecast of The Week</p>
        <div className="view-more-grid">
           {forecastData ? (
            forecastData
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
    </div>
  )
}

export default ViewMore