import uri from "../../../constance/uri";
import { dreamDetailResponse } from "../../../models/dto/response/dreamDetailResponse";
import { getRequestWithToken } from "../default";

export const getDreamDetail = async (dreamUUID: string) => {
  const token = localStorage.getItem("access_token");
  const request = getRequestWithToken(token!);
  try {
    const response = await request.get<dreamDetailResponse>(`${uri.dreamShare}/${dreamUUID}`);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
