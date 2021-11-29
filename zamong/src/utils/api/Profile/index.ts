import uri from "../../../constance/uri";
import {
  FollowerListResponse,
  FollowingListResponse,
  myProfileResponse,
} from "../../../models/dto/response/myProfileResponse";
import instance from "../axios";

export const getMyProfile = async () => {
  try {
    const response = await instance.get<myProfileResponse>(uri.myProfile);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getFollowing = async (uuid: string) => {
  try {
    const response = await instance.get<FollowingListResponse>(
      `/user/${uuid}` + uri.followingList + `?page=0&size=4`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getFollower = async (uuid: string) => {
  try {
    const response = await instance.get<FollowerListResponse>(
      `/user/${uuid}` + uri.followerList + `?page=0&size=4`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
