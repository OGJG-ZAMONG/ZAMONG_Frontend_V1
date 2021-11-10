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

export const login = async (data: DataType) => {
  try {
    const response = await request.post<TokenType>(uri.login, data);

    localStorage.setItem(
      "access_token",
      response.data.content.response.access_token
    );
    localStorage.setItem(
      "refresh_token",
      response.data.content.response.refresh_token
    );
    localStorage.setItem("expireAt", getDateWithAddHour(1));

    return response.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};
