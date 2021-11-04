import axios, { AxiosError } from "axios";
import { refresh, refreshError } from "../refresh";

const instance = axios.create({
  baseURL: "http://52.78.219.131:8080/v1/api",
  timeout: 100000,
});

instance.interceptors.request.use(refresh, refreshError);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export default instance;
