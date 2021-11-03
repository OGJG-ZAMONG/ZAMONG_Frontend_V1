import uri from "../../../constance/uri";
import { getRequest } from "../default";

interface DataType {
  user_identity: string;
  password: string;
}

interface TokenType {
  status: number,
  timestamp: string,
  content: {
      collection_value: boolean,
      response: {
          access_token: string,
          refresh_token: string,
      }
  }
}

export const login = async (data: DataType) => {
  try {
    const request = getRequest();
    const response = await request.post<TokenType>(uri.login, data);
    localStorage.setItem('access_token', response.data.content.response.access_token);
    localStorage.setItem('refresh_token', response.data.content.response.refresh_token);
    return response.data;
  } catch (error: any) {
    return Promise.reject(error);
  }
};