import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import "./Auth.css";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    if (!email.trim() || !password.trim()) {
      alert("Заполните поля!");
      return;
    }

    e.preventDefault();

    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    login(formData, email);
  };

  return (
    <div className="container">
      <h1 className="title">Jellyfish</h1>
      <div className="inp__cont2">
        <form className="inp__form">
          <div className="inp-box">
            <label className="inp__title" htmlFor="email">
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
            <label className="inp__title" htmlFor="password">
              Пароль
            </label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="reg__btn" type="submit" onClick={handleSubmit}>
            <span className="inp__text">войти</span>
          </button>
          <Link style={{ marginTop: "10px" }} to={"/register"}>
            <div>регистрация</div>
          </Link>
        </form>
      </div>
      <div className="eclipse"></div>
      <div className="eclipse2"></div>
      <div className="eclipse3"></div>
    </div>
  );
};

export default Login;
