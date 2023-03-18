import React from "react";
import "./Auth.css";
<link
  href="//db.onlinewebfonts.com/c/1ef64e980bfacae78e555760cec7515a?family=Sprite+Graffiti"
  rel="stylesheet"
  type="text/css"
/>;

const Sms = () => {
  return (
    <div className="container">
      <h1 className="title">Jellyfish</h1>
      <div className="inp__cont3">
        <form className="inp__form">
          <div className="inp-box">
            <label className="inp__title" htmlFor="email">
              Ваша почта
            </label>
            <input className="input" type="email" />
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

export default Sms;
