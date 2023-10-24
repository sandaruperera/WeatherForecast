import React from "react";
import "./Login.css";
import UsernameIcon from "../../assets/person.svg";
import PasswordIcon from "../../assets/password.svg";
import LoginFormImage from "../../assets/login_image.jpg";
const Login = () => {
  return (
    <div className="login">
        <h1>Weather</h1>
        <div className="field" >
            <img src={UsernameIcon} alt="" />
            <input type="text" id="username" name="username"/>
        </div>
        <div className="field">
            <img src={PasswordIcon} alt="" />
            <input type="password" id="password" name="password"/>
        </div>
        <button>Login</button>
    </div>
  );
};

export default Login;
