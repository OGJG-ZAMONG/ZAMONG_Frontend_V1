import axios from "axios";

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: "http://52.78.219.131:8080/v1/api",
    headers: {},
  });

  return request;
};
