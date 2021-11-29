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
  const expireAt = localStorage.getItem("expireAt");
  let accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");

  if (!refreshToken || !expireAt) {
    //리프레시 토큰이 없으면 로그인 상태가 아님
    window.location.href = "/";
    localStorage.removeItem("expireAt");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    return config;
  }

  if (new Date().getTime() > new Date(expireAt).getTime()) {
    //엑세스 토큰 만료
    const data = {
      refresh_token: refreshToken,
    };

    try {
      const { access_token, refresh_token } = (await request.post<TokenType>(uri.refresh, data))
        .data.content.response;
      accessToken = access_token;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("expireAt", getDateWithAddHour(2).toString());
    } catch {
      //리프레시 토큰 만료
      window.location.href = "/";
      localStorage.removeItem("expireAt");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");

      return config;
    }
  }

  config.headers["Authorization"] = `Bearer ${accessToken}`;

  return config;
};

const refreshError = (err: any) => {
  localStorage.removeItem("expireAt");
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

export { refresh, refreshError };
