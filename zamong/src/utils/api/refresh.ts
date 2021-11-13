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
  date.setHours(date.getHours() + hour);
  return date;
};

const refresh = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const expireAt = localStorage.getItem("expireAt")!;
  let accessToken = localStorage.getItem("access_token");
  let refreshToken = localStorage.getItem("refresh_token");

  if (!refreshToken) {
    //리프레시 토큰이 없으면 로그인 상태가 아님
    window.location.href = "/";
  }

  if (new Date().getTime() > new Date(expireAt).getTime()) {
    //엑세스 토큰 만료
    const data = {
      refresh_token: refreshToken,
    };

    try {
      const response = await request.post<TokenType>(uri.refresh, data);
      accessToken = response.data.content.response.access_token;
      refreshToken = response.data.content.response.refresh_token;

      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      localStorage.setItem("expireAt", getDateWithAddHour(2).toString());
    } catch {
      //리프레시 토큰 만료
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
