import uri from "../../../constance/uri";
import { sellWriteResponse } from "../../../models/dto/request/sellWriteResquest";
import { diaryWriteResponse } from "../../../models/dto/response/diaryWriteResponse";
import instance from "../axios";

export const postSellDream = async (data: sellWriteResponse) => {
  try {
    const response = await instance.post<diaryWriteResponse>(uri.dreamSell, data);
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
