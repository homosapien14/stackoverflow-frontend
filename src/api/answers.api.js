import axios from "axios";

import {
  allAnswersData as _allAnswersData,
  createSingleAnswer as _createSingleAnswer,
  deleteSingleAnswer as _deleteSingleAnswer,
} from "./url";
const BASE_URL = "http://127.0.0.1:8081";
export const allAnswersData = async (id) => {
  const response = await axios.get(BASE_URL + "/api/posts/answers/" + id);
  return response;
};

export const createSingleAnswer = (post_id, body, token) => {
  const config_headers = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };
  console.log(post_id);
  return axios.post(
    BASE_URL + "/api/posts/answers/" + post_id,
    body,
    config_headers
  );
};

export const deleteSingleAnswer = (AnswerId, token) => {
  const config_headers = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };
  return axios.delete(
    _deleteSingleAnswer.replace("{AnswerId}", AnswerId),
    config_headers
  );
};
