import { getRequestWithToken } from "../../default";

export const getMyDreamData = async (
  access_token: any,
  type: string | null,
  page: number
) => {
  try {
    const request = getRequestWithToken(access_token, "json");
    return await request.get(`/dream/share/me?page=${page}&size=16&sort=${type}`);
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
