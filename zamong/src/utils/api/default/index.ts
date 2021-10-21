import axios from "axios";

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: "http://52.78.219.131:8080/v1/api",
  });

  return request;
};

export const getRequestWithToken = (
    token: string,
    type: "json" | "blob" | "text" = "json"
  ) => {
    const request = axios.create({
      timeout: 10000,
      baseURL: "test",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: type,
    });
  
    return request;
  };
  