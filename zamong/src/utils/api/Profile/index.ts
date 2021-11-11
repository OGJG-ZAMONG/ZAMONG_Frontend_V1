import uri from "../../../constance/uri";
import { getRequestWithToken } from "../default";
import {
  FollowerListResponse,
  FollowingListResponse,
  myProfileResponse,
} from "../../../models/dto/response/myProfileResponse";

export const getMyProfile = async (access_token: string) => {
  try {
    const request = getRequestWithToken(access_token);
    const response = await request.get<myProfileResponse>(uri.myProfile);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getFollowing = async (access_token: string, uuid: string) => {
  try {
    const request = getRequestWithToken(access_token);
    const response = await request.get<FollowingListResponse>(
      `/user/${uuid}` + uri.followingList + `?page=0&size=4`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getFollower = async (access_token: string, uuid: string) => {
  try {
    const request = getRequestWithToken(access_token);
    const response = await request.get<FollowerListResponse>(
      `/user/${uuid}` + uri.followerList + `?page=0&size=4`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
