import axios from "axios";

import {
  loadUserData as _loadUserData,
  registerUser as _registerUser,
  loginUser as _loginUser,
} from "./url";

export const loadUserData = async (token) => {
  const config_headers = {
    headers: {
      "x-access-token": token,
    },
  };
  const response = await axios.get(_loadUserData, config_headers);
  return response;
};

export const registerUser = async (username, password) => {
  const config_headers = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const body = JSON.stringify({ username, password });

  const response = await axios.post(_registerUser, body, config_headers);
  return response;
};

export const loginUser = async (username, password) => {
  const config_headers = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const body = JSON.stringify({ username, password });

  const response = await axios.post(_loginUser, body, config_headers);
  return response;
};
