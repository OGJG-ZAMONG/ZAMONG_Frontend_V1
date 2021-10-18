import axios from "axios";

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: "test",
    withCredentials: true,
    headers: {
      withCredentials: true,
    },
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
        witåhCredentials: true,
      },
      responseType: type,
      withCredentials: true,
    });
  
    return request;
  };
  