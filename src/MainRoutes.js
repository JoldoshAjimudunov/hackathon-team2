import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import NewPassword from "./components/auth/NewPassword";
import Register from "./components/auth/Register";
import Sms from "./components/auth/Sms";
import ListChat from './components/chatUser/ListChat'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="/sms" element={<Sms />} />
      <Route path="/chat" element={<ListChat />} />
    </Routes>
  );
};

export default MainRoutes;
