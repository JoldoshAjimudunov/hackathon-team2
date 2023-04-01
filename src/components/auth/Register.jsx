import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import "./Auth.css";
import { Link } from "react-router-dom";
{
}

const Register = () => {
  const { register } = useAuth();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Заполните поля!");
      return;
    }
    e.preventDefault();
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", confirmPassword);
    register(formData);
  };
  return (
    <div className="container">
      <h1 className="title">Jellyfish</h1>
      <div className="inp__cont">
        <form className="inp__form">
          {/* <div className="inp-box">
            <label className="inp__title" htmlFor="name">
              Имя
            </label>
            <input className="input" type="text" />
          </div>
          <div className="inp-box">
            <label className="inp__title" htmlFor="name">
              Фамилия
            </label>
            <input className="input" type="text" />
          </div> */}
          <div className="inp-box">
            <label className="inp__title" htmlFor="name">
              Ваша почта
            </label>
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inp-box">
            <label className="inp__title" htmlFor="name">
              Пароль
            </label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="inp-box">
            <label className="inp__title" htmlFor="name">
              Повторите пароль
            </label>
            <input
              className="input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="reg__btn" type="submit" onClick={handleSubmit}>
            <span className="inp__text__reg">зарегистрироваться</span>
          </button>
          <Link style={{ marginTop: "10px" }} to={"/login"}>
            <div>войти</div>
          </Link>
        </form>
      </div>
      <div className="eclipse"></div>
      <div className="eclipse2"></div>
      <div className="eclipse3"></div>
    </div>
  );
};

export default Register;
