import uri from "../../../constance/uri";
import { shareDreamRequest } from "../../../models/dto/request/shareDreamRequest";
import { shareDreamWithSortRequest } from "../../../models/dto/request/shareDreamWithSortRequest";
import { shareDreamResponse } from "../../../models/dto/response/shareDreamResponse";
import { getRequestWithToken } from "../default";
import { followingResponse } from "../../../models/dto/response/followingsResponse";
import { getMyProfile } from "../Profile";
import { dreamListResponse } from "../../../models/dto/response/dreamListResponse";

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

export const getMyDreamDiary = async (param: shareDreamWithSortRequest) => {
  const token = localStorage.getItem("access_token");
  const request = getRequestWithToken(token!);

  try {
    const response = await request.get<shareDreamResponse>(uri.dreamShareMe, { params: param });
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getShareDream = async (param: shareDreamWithSortRequest) => {
  const token = localStorage.getItem("access_token");
  const request = getRequestWithToken(token!);

  try {
    const response = await request.get<dreamListResponse>(uri.dreamShare, { params: param });
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
