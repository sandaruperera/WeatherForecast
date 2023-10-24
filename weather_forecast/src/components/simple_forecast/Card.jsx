import React from "react";
import "./Card.css";
import ClearImage from "../../assets/clear.png";

const Card = () => {
  return (
    <div className="card-container">
      <p className="day">Mon</p>
      <img src={ClearImage} alt="" />
      <p className="card-temperature">30°C</p>
      <p className="card-description">Clear Sky</p>
      <p className="card-humidity">72%</p>
    </div>
  );
};

export default Card;
