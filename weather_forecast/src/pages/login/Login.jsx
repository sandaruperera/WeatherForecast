import React, { useState } from "react";
import "./Login.css";
import UsernameIcon from "../../assets/person.svg";
import PasswordIcon from "../../assets/password.svg";
import LoginFormImage from "../../assets/login_image.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const hardcodedUsername = "reactTest123";
  const hardcodedPassword = "reactTest123";

  const handleLogin = () => {
    if (username === hardcodedUsername && password === hardcodedPassword) {
      localStorage.setItem("username", username)
      localStorage.setItem("password", password)
     
      setLoggedIn(true);
      setError(null);
      navigate("/WeatherForecast/home");
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="login-form">
<div className="login">
      <h1>Weather</h1>
      <div className="field">
        <img src={UsernameIcon} alt="" />
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div className="field">
        <img src={PasswordIcon} alt="" />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error-message">{error}</p>}
      {loggedIn && <p className="success-message">Login successful!</p>}
     
      
    </div>
    </div>
    
  );
};

export default Login;
