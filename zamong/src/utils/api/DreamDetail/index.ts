import uri from "../../../constance/uri";
import { dreamDetailResponse } from "../../../models/dto/response/dreamDetailResponse";
import { getRequestWithToken } from "../default";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzU5MzA5ODQsImV4cCI6MTYzNTkzODE4NCwic3ViIjoiZTljNzc2YjYtZGE3Yy00ZjM0LWFiNWMtNjA2MGNkNGNiODI4IiwidHlwZSI6ImFjY2VzcyJ9.3HLbWFhF2mca6IiJQwpaFNFlFBt1WQF7yR6IVlDbTXs";

export const getDreamDetail = async (dreamUUID: string) => {
  //   const token = localStorage.getItem("access_token");

  const request = getRequestWithToken(token);
  try {
    const response = await request.get<dreamDetailResponse>(`${uri.dreamShare}/${dreamUUID}`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
