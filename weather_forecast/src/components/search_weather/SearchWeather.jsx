import React from 'react'
import './SearchWeather.css'

const SearchWeather = () => {
  return (
    <div className='main-conntainer'>
     <div className="field" >
            <p>Latitude</p>
            <input type="text" id="username" name="username" placeholder='latitude'/>
        </div>
        <div className="field">
            <p>Longitude</p>
            <input type="password" id="password" name="password" placeholder='longitude'/>
        </div>   
        <button>Search</button>
    </div>
  )
}

export default SearchWeather