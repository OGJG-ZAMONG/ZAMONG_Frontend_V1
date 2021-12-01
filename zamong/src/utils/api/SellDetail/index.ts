import uri from "../../../constance/uri";
import instance from "../axios";
import { sellDreamDetailResponse } from "../../../models/dto/response/sellDreamDetailResponse";

export const getSellDream = async (uuid: string) => {
  try {
    const response = await instance.get<sellDreamDetailResponse>(
      uri.sellDreamInfo.replace("DREAM_UUID", uuid)
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
