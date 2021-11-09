import axios, { AxiosRequestConfig } from "axios";
import uri from "../../constance/uri";
import { request } from "./axios";

interface TokenType {
  status: number;
  timestamp: string;
  content: {
    collection_value: boolean;
    response: {
      access_token: string;
      refresh_token: string;
    };
  };
}

const getDateWithAddHour = (hour: number) => {
  const date = new Date();
  date.setTime(date.getTime() + hour * 60 * 60 * 1000);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const stringDay = `${year}${month >= 10 ? month : "0" + month}${
    day >= 10 ? day : "0" + day
  }${hours >= 10 ? hours : "0" + hours}${
    minutes >= 10 ? minutes : "0" + minutes
  }`;
  return stringDay;
};

const refresh = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const expireAt = localStorage.getItem("expireAt")!;
  let accessToken = localStorage.getItem("access_token");
  let refreshToken = localStorage.getItem("refresh_token");

  if (getDateWithAddHour(0) > expireAt || refreshToken) {
    const data = {
      refresh_token: refreshToken,
    };

    try {
      const response = await request.post<TokenType>(uri.refresh, data);
      accessToken = response.data.content.response.access_token;
      refreshToken = response.data.content.response.refresh_token;

      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      localStorage.setItem("expireAt", getDateWithAddHour(1));
    } catch {
      window.location.href = "/";
    }
  }
  config.headers["Authorization"] = `Bearer ${accessToken}`;

  return config;
};

const refreshError = (err: any) => {
  localStorage.removeItem("refresh_token");
};

export { refresh, refreshError };
