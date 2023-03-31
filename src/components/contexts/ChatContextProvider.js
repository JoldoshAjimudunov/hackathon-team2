import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_MESSAGES } from "../../const";

export const chatContext = createContext();

export const useChat = () => useContext(chatContext);

const INIT_STATE = {
  messagesArray: [],
  oneMessage: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_MESSAGES":
      console.log("get messages");
      return {
        ...state,
        messagesArray: action.payload,
      };
    case "GET_ONE_MESSAGE":
      console.log("one");
      return { ...state, oneMessage: action.payload };
    default:
      console.log("default");
      return state;
  }
}

const ChatContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [error, setError] = useState([]);
  const navigate = useNavigate();

  async function getMessages() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(
        `${API_MESSAGES}${window.location.search}`,
        config
      );
      dispatch({
        type: "GET_MESSAGES",
        payload: res.data,
      });
    } catch (error) {}
  }

  async function getOneMessage(id) {
    console.log(state.messages);

    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API_MESSAGES}${id}/`, config);
      dispatch({
        type: "GET_ONE_MESSAGE",
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }

  async function editMessage(id, message) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(`${API_MESSAGES}${id}/`, message, config);
      getMessages();
      navigate("/chat");
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }

  async function deleteMessage(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(`${API_MESSAGES}${id}/`, config);
      getMessages();
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }

  async function addMessages(message) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API_MESSAGES}`, message, config);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  const value = {
    messages: state.messagesArray,
    oneMessage: state.oneMessage,
    getMessages,
    deleteMessage,

    getOneMessage,
    editMessage,
    addMessages,
  };
  return <chatContext.Provider value={value}>{children}</chatContext.Provider>;
};

export default ChatContextProvider;
