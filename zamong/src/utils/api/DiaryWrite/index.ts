import { AxiosResponse } from "axios";
import uri from "../../../constance/uri";
import { diaryWriteRequest } from "../../../models/dto/request/diaryWriteRequest";
import { diaryWriteResponse } from "../../../models/dto/response/diaryWriteResponse";
import { getRequestWithToken } from "../default";

export type diaryWriteApiType = (
  data: diaryWriteRequest,
  dreamUUID: string
) => Promise<AxiosResponse<diaryWriteResponse>>;

export const diaryWritePost = async (
  data: diaryWriteRequest,
  dreamUUID: string
): Promise<AxiosResponse<diaryWriteResponse>> => {
  const token = localStorage.getItem("access_token");
  const request = getRequestWithToken(token!);
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
  const token = localStorage.getItem("access_token");
  const request = getRequestWithToken(token!);
  try {
    const response = await request.put<diaryWriteResponse>(`${uri.dreamShare}/${dreamUUID}`, data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const diaryWriteFilePost = async (
  file: File,
  dreamUUID: string
): Promise<AxiosResponse<any>> => {
  const token = localStorage.getItem("access_token");
  const request = getRequestWithToken(token!);
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await request.post(`${uri.dreamShareImage}/${dreamUUID}`, formData);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
