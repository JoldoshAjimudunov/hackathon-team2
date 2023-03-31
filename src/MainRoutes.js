import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import NewPassword from "./components/auth/NewPassword";
import Register from "./components/auth/Register";
import Sms from "./components/auth/Sms";
import Welcome from "./components/auth/Welcome";
import EditMsg from "./components/chatUser/EditMsg";
import ListChat from "./components/chatUser/ListChat";
import Profile from "./components/chatUser/Profile";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/newpassword" element={<NewPassword />} />
      <Route path="/sms" element={<Sms />} />
      <Route path="/chat" element={<ListChat />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit/:id" element={<EditMsg />} />
    </Routes>
  );
};

export default MainRoutes;
