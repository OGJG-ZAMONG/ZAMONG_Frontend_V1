import uri from "../../../constance/uri";
import { shareDreamRequest } from "../../../models/dto/request/shareDreamRequest";
import { myShareDreamRequest } from "../../../models/dto/request/myShareDreamRequest";
import { shareDreamResponse } from "../../../models/dto/response/shareDreamResponse";
import { getRequestWithToken } from "../default";
import { followingResponse } from "../../../models/dto/response/followingsResponse";
import { getMyProfile } from "../Profile";

export const getFollowShareDream = async (param: shareDreamRequest) => {
  const token = localStorage.getItem("access_token");
  const request = getRequestWithToken(token!);
  try {
    const response = await request.get<shareDreamResponse>(uri.dreamShareFollow, { params: param });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getMyDreamDiary = async (param: myShareDreamRequest) => {
  const token = localStorage.getItem("access_token");
  const request = getRequestWithToken(token!);

  try {
    const response = await request.get<shareDreamResponse>(uri.dreamShareMe, { params: param });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getShareDream = async (param: shareDreamRequest) => {
  const token = localStorage.getItem("access_token");
  const request = getRequestWithToken(token!);

  try {
    const response = await request.get<shareDreamResponse>(uri.dreamShare, { params: param });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getFollowList = async (param: { page: number; size: number }) => {
  const token = localStorage.getItem("access_token");
  const request = getRequestWithToken(token!);
  const split = uri.following.split("/");

  try {
    const { uuid } = (await getMyProfile(token!)).data.content.response;

    const url = `/${split[1]}/${uuid}/${split[2]}`;

    const response = await request.get<followingResponse>(url, { params: param });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
