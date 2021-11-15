import uri from "../../../constance/uri";
import { sellWriteResponse } from "../../../models/dto/request/sellWriteResquest";
import { diaryWriteResponse } from "../../../models/dto/response/diaryWriteResponse";
import instance from "../axios";

export const postSellDream = async (data: sellWriteResponse, uuid: string) => {
  try {
    const response = await instance.post<diaryWriteResponse>(uri.dreamSell, data);
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const putSellDream = async (data: sellWriteResponse, uuid: string) => {
  try {
    const response = await instance.put<diaryWriteResponse>(`${uri.dreamSell}/${uuid}`, data);
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
