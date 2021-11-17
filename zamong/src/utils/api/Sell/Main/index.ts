import uri from "../../../../constance/uri";
import { sellDreamDetailResponse } from "../../../../models/dto/response/sellDreamDetailResponse";
import instance from "../../axios";
export const getCurrentSellingDreams = async (
  page: number
) => {
  try {
    return await instance.get(`/dream/sell/continue?page=${page}&size=16`);
  } catch (error) {
    throw error;
  }
};

export const getSellDreamDetail = async (uuid: string) => {
  try {
    const response = await instance.get<sellDreamDetailResponse>(
      `${uri.dreamSell}/${uuid}`
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
