import uri from "../../../../constance/uri";
import { sellDreamDetailResponse } from "../../../../models/dto/response/sellDreamDetailResponse";
import instance from "../../axios";
import { getRequestWithToken } from "../../default/index";
export const getCurrentSellingDreams = async (access_token: any, page: number) => {
  try {
    const request = getRequestWithToken(access_token, "json").get(
      `/dream/sell/continue?page=${page}&size=16`
    );
    return await request;
  } catch (error) {
    throw error;
  }
};

export const getSellDreamDetail = (uuid: string) => {
  try {
    const response = instance.get<sellDreamDetailResponse>(`${uri.dreamSell}/${uuid}`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
