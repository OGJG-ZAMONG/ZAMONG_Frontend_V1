import uri from "../../../constance/uri";
import instance, { request } from "../axios";

interface DataType {
  user_identity: string;
  password: string;
}

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

export const login = async (data: DataType) => {
  try {
    const response = await request.post<TokenType>(uri.login, data);

    localStorage.setItem("access_token", response.data.content.response.access_token);
    localStorage.setItem("refresh_token", response.data.content.response.refresh_token);
    localStorage.setItem("expireAt", getDateWithAddHour(2).toString());

    return response.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};
