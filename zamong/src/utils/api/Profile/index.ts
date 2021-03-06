import uri from "../../../constance/uri";
import { pageRequest } from "../../../models/dto/request/followListRequest";
import {
  followerListResponse,
  followingListResponse,
  profileResponse,
} from "../../../models/dto/response/profileResponse";
import instance from "../axios";

export const getMyProfile = async () => {
  try {
    const response = await instance.get<profileResponse>(uri.myProfile);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getFollowing = async (uuid: string, parameter: pageRequest) => {
  try {
    const response = await instance.get<followingListResponse>(
      `/user/${uuid}` + uri.followingList,
      { params: parameter }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getFollower = async (uuid: string, parameter: pageRequest) => {
  try {
    const response = await instance.get<followerListResponse>(
      `/user/${uuid}` + uri.followerList,
      { params: parameter }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const changeProfile = async (profile: File) => {
  try {
    const formData = new FormData();
    formData.append("file", profile);
    const response = await instance.patch(`/user/profile`, formData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const modfiyId = async (id: string) => {
  try {
    const response = await instance.patch(`/user/user-id`, { id: id });
    return response;
  } catch (error) {
    throw error;
  }
};

export const follow = async (id: string) => {
  try {
    const response = await instance.post(uri.follow, { user_uuid: id });
    return response;
  } catch (error) {
    throw error;
  }
};

export const unfollow = async (id: string) => {
  try {
    const response = await instance.delete(uri.follow, {
      data: { user_uuid: id },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAntherUsersProfile = async (user_uuid: string) => {
  try {
    const response = await instance.get<profileResponse>(`/user/${user_uuid}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const accountSecession = async (pw: string) => {
  try {
    const response = await instance.delete(`/user`, { data: { password: pw } });
    return response;
  } catch (error) {
    throw error;
  }
};

export const changePw = async (oldPw: string, newPw: string) => {
  try {
    const response = await instance.patch(`/user/password`, {
      old_password: oldPw,
      new_password: newPw,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
