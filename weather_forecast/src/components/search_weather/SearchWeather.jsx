import React from "react";
import { useState } from "react";
import "./SearchWeather.css";
import { searchWeatherData } from '../../api/apiClient'

const SearchWeather = ({ onSearch }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (latitude.trim() === '' || longitude.trim() === '') {
      setError('Please enter valid details.');
    } else if (!/^-?\d+(\.\d+)?$/.test(latitude) || !/^-?\d+(\.\d+)?$/.test(longitude)) {
      setError('Please enter valid numbers for latitude and longitude.');
    } else {
      setError('');
      onSearch({ latitude, longitude });
    }
  };
  return (
    <div className="main-conntainer">
      <div className="field">
        <p>Latitude</p>
        <input
          type="text"
          id="latitude"
          name="latitude"
          placeholder="latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
      </div>
      <div className="field">
        <p>Longitude</p>
        <input
          type="text"
          id="longitude"
          name="longitude"
          placeholder="longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SearchWeather;
