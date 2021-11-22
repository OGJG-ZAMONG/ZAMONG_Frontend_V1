import { AxiosResponse } from "axios";
import uri from "../../../constance/uri";
import { diaryWriteRequest } from "../../../models/dto/request/diaryWriteRequest";
import { diaryWriteResponse } from "../../../models/dto/response/diaryWriteResponse";
import instance from "../axios";

export type diaryWriteApiType = (
  data: diaryWriteRequest,
  dreamUUID: string
) => Promise<AxiosResponse<diaryWriteResponse>>;

export const diaryWritePost = async (
  data: diaryWriteRequest,
  dreamUUID: string
): Promise<AxiosResponse<diaryWriteResponse>> => {
  try {
    const response = await instance.post<diaryWriteResponse>(uri.dreamShare, data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const diaryWritePut = async (
  data: diaryWriteRequest,
  dreamUUID: string
): Promise<AxiosResponse<diaryWriteResponse>> => {
  try {
    const response = await instance.put<diaryWriteResponse>(`${uri.dreamShare}/${dreamUUID}`, data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
