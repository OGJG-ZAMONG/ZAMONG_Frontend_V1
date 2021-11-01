import { AxiosResponse } from "axios";
import uri from "../../../constance/uri";
import { diaryWriteRequest } from "../../../models/dto/request/diaryWriteRequest";
import { diaryWriteResponse } from "../../../models/dto/response/diaryWriteResponse";
import { getRequest } from "../default";

export const diaryWritePost = async (
  data: diaryWriteRequest
): Promise<AxiosResponse<diaryWriteResponse>> => {
  const request = getRequest();
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
  const request = getRequest();
  try {
    const response = await request.put<diaryWriteResponse>(`${uri.dreamShare}/${dreamUUID}`, data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
