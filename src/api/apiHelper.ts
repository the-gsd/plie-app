import {
  deleteRequestParamTypes,
  getRequestParamTypes,
  patchRequestParamTypes,
  postRequestParamTypes,
} from "../types/apiHelperTypes";
import asyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const getRequest = async ({
  url,
  token = false,
}: getRequestParamTypes) => {
  let headers = {};

  if (token) {
    const bearerToken = await asyncStorage.getItem("token");
    if (bearerToken) {
      headers = {
        Authorization: `Bearer ${bearerToken}`,
      };
    }
  }

  try {
    const res = await axios.get(url, { headers });
    return res;
  } catch (error) {
    console.error("Error making GET request:", error);
    return error;
  }
};

export const postRequest = async ({
  url,
  data,
  token = false,
}: postRequestParamTypes) => {
  let headers = {};

  if (token) {
    const bearerToken = await asyncStorage.getItem("token");
    if (bearerToken) {
      headers = { Authorization: `Bearer ${bearerToken}` };
    }
  }

  try {
    const res = await axios.post(url, data, { headers });
    return res;
  } catch (error) {
    console.error("Error making POST request:", error);
    throw error;
  }
};

export const patchRequest = async ({
  url,
  data,
  token = false,
}: patchRequestParamTypes) => {
  let headers = {};

  if (token) {
    const bearerToken = await asyncStorage.getItem("token");
    if (bearerToken) {
      headers = { Authorization: `Bearer ${bearerToken}` };
    }
  }

  try {
    const res = await axios.patch(url, data, { headers });
    return res;
  } catch (error) {
    console.error("Error making PATCH request:", error);
    throw error;
  }
};

export const deleteRequest = async ({
  url,
  token = false,
}: deleteRequestParamTypes) => {
  let headers = {};

  if (token) {
    const bearerToken = await asyncStorage.getItem("token");
    if (bearerToken) {
      headers = { Authorization: `Bearer ${bearerToken}` };
    }
  }

  try {
    const res = await axios.delete(url, { headers });
    return res;
  } catch (error) {
    console.error("Error making DELETE request:", error);
    throw error;
  }
};
