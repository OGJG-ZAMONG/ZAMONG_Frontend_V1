import uri from "../../../constance/uri";
import { shareDreamRequest } from "../../../models/dto/request/shareDreamRequest";
import { shareDreamResponse } from "../../../models/dto/response/shareDreamResponse";
import { getRequestWithToken } from "../default";

export const getFollowShareDream = async (param: shareDreamRequest) => {
  const token = localStorage.getItem("access_token");
  const request = getRequestWithToken(token!);
  try {
    const response = request.get<shareDreamResponse>(uri.dreamShareFollow, { params: param });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMyDreamDiary = (param: shareDreamRequest) => {
  const token = localStorage.getItem("access_token");
  const request = getRequestWithToken(token!);

  try {
    const response = request.get<shareDreamResponse>(uri.dreamShareMe, { params: param });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getShareDream = (param: shareDreamRequest) => {
  const token = localStorage.getItem("access_token");
  const request = getRequestWithToken(token!);

  try {
    const response = request.get<shareDreamResponse>(uri.dreamShare, { params: param });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
