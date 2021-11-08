import { getRequestWithToken } from "../../default";

export const getMyDreamData = async (
  access_token: any,
  type: string | null
) => {
  try {
    const request = getRequestWithToken(access_token, "json");
    return await request.get(`/dream/share/me?page=0&size=20&sort=${type}`);
  } catch (error) {
    throw error;
  }
};

export const getDreamsWrittenToday = async (access_token: any) => {
  try {
    const request = getRequestWithToken(access_token, "json");
    return await request.get(`/dream/share/me/today`);
  } catch (error) {
    throw error;
  }
};
