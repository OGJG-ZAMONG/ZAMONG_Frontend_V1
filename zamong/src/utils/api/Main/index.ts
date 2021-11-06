import uri from "../../../constance/uri";
import { followShareDreamRequest } from "../../../models/dto/request/followShareDreamRequest";
import { followShareDreamResponse } from "../../../models/dto/response/followShareDreamResponse";
import { getRequestWithToken } from "../default";

export const getFollowShareDream = async (param: followShareDreamRequest) => {
  const token = localStorage.getItem("access_token");
  const request = getRequestWithToken(token!);
  try {
    const response = request.get<followShareDreamResponse>(uri.dreamShareFollow, { params: param });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
