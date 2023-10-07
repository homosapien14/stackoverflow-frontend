import axios from "axios";

import {
  allPostsData as _allPostsData,
  singlePostData as _singlePostData,
  allTagPostsData as _allTagPostsData,
  createSinglePost as _createSinglePost,
  deleteSinglePost as _deleteSinglePost,
} from "./url";

export const allPostsData = async () => {
  const response = await axios.get(_allPostsData);
  // const res = response.json();
  return response.data;
};

export const singlePostData = (id) => {
  return axios.get(_singlePostData.replace("{id}", id));
};

export const allTagPostsData = (tagName) => {
  return axios.get(_allTagPostsData.replace("{tagName}", tagName));
};

export const createSinglePost = (formData, token) => {
  const config_headers = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };
  console.log(formData);

  const response = axios.post(_createSinglePost, formData, config_headers);
  return response;
};

export const deleteSinglePost = (id, token) => {
  const config_headers = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };
  return axios.delete(_deleteSinglePost.replace("{id}", id), config_headers);
};
