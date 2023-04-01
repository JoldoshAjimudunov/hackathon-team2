import React from "react";
import "./Auth.css";

const NewPassword = () => {
  return (
    <div className="container">
      <h1 className="title">Jellyfish</h1>
      <div className="inp__cont2">
        <form className="inp__form">
          <div className="inp-box">
            <label className="inp__title" htmlFor="password">
              Новый пароль
            </label>
            <input className="input" type="password" />
          </div>
          <div className="inp-box">
            <label className="inp__title" htmlFor="password">
              Потвердите Пароль
            </label>
            <input className="input" type="password" />
          </div>

          <button className="reg__btn" type="submit">
            <span className="inp__text">войти</span>
          </button>
        </form>
      </div>
      <div className="eclipse"></div>
      <div className="eclipse2"></div>
      <div className="eclipse3"></div>
    </div>
  );
};

export default NewPassword;
