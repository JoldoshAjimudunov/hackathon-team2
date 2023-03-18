import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
