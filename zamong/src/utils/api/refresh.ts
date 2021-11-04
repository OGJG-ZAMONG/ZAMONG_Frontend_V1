import { AxiosRequestConfig } from "axios";
import uri from "../../constance/uri";
import instance from "./axios";

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
  const day = new Date();
  day.setTime(day.getTime() + hour * 60 * 60 * 1000);
  const stringDay = String(day.getFullYear() + day.getMonth() + day.getDay() + day.getHours() + day.getMinutes() + day.getSeconds());
  return stringDay;
};

const refresh = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const refreshToken = localStorage.getItem("refresh_token");
  const expireAt = localStorage.getItem("expireAt")!;
  let accessToken = localStorage.getItem("access_token");

  if( new Date(expireAt).getTime() - new Date().getTime() < 0  && refreshToken){
    const data = {
      refresh_token: refreshToken,
    }
    console.log(111);
    const response = await instance.post<TokenType>(uri.refresh, data);
    accessToken = response.data.content.response.access_token;

    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("expireAt", getDateWithAddHour(1));
  }
  console.log('asdw')

  config.headers["Authorization"] = `Bearer ${accessToken}`;

  return config;
};

const refreshError = (err: any) => {
  localStorage.removeItem("refresh_token");
};

export { refresh, refreshError };
