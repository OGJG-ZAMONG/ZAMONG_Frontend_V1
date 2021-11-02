import { AxiosResponse } from "axios";
import uri from "../../../constance/uri";
import { diaryWriteRequest } from "../../../models/dto/request/diaryWriteRequest";
import { diaryWriteResponse } from "../../../models/dto/response/diaryWriteResponse";
import { getRequestWithToken } from "../default";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzU4NTc0NzYsImV4cCI6MTYzNTg2NDY3Niwic3ViIjoiZTljNzc2YjYtZGE3Yy00ZjM0LWFiNWMtNjA2MGNkNGNiODI4IiwidHlwZSI6ImFjY2VzcyJ9.lCDiWv7xmkHchcg5Ncrg0wVyOUeIEZ9ZCXKBc56wcrQ";

export const diaryWritePost = async (
  data: diaryWriteRequest
): Promise<AxiosResponse<diaryWriteResponse>> => {
  const request = getRequestWithToken(token, "json");
  try {
    const response = await request.post<diaryWriteResponse>(uri.dreamShare, data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const diaryWritePut = async (
  data: diaryWriteRequest,
  dreamUUID: string
): Promise<AxiosResponse<diaryWriteResponse>> => {
  const request = getRequestWithToken(token, "json");
  try {
    const response = await request.put<diaryWriteResponse>(`${uri.dreamShare}/${dreamUUID}`, data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
