import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers["x-access-token"] = token;
  } else {
    delete axios.defaults.headers["x-access-token"];
  }
};

export default setAuthToken;
