import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./components/contexts/AuthContextProvider";
import ChatContextProvider from "./components/contexts/ChatContextProvider";
import ProfileContextProvider from "./components/contexts/ProfileContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ChatContextProvider>
        <ProfileContextProvider>
          <App />
        </ProfileContextProvider>
      </ChatContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
