import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import NewPassword from "./components/auth/NewPassword";
import Register from "./components/auth/Register";
import Sms from "./components/auth/Sms";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="/sms" element={<Sms />} />
    </Routes>
  );
};

export default MainRoutes;
