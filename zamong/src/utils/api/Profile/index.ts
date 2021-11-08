import uri from "../../../constance/uri";
import { getRequestWithToken } from "../default";
import { myProfileResponse } from "../../../models/dto/response/myProfileResponse";

export const getMyProfile = async (access_token: string) => {
  try {
    const request = getRequestWithToken(access_token);
    const response = await request.get<myProfileResponse>(uri.myProfile);
    return response;
  } catch (error) {
    throw error;
  }
};
