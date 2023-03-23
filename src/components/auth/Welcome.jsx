import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome__cont">
      <div>
        <img src={require("../../imgs/image2.png")} alt="" />
      </div>
      <div>
        <h1 className="title">Jellyfish</h1>
      </div>
      <div className="welcome__btns">
        <button className="reg__btn" onClick={() => navigate("/login")}>
          <span className="inp__text">войти</span>
        </button>
        <button className="reg__btn" onClick={() => navigate("/register")}>
          <span className="inp__text__reg">зарегистрироваться</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
