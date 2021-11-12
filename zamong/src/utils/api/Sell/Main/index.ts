import { getRequestWithToken } from "../../default/index";
export const getCurrentSellingDreams = async (
  access_token: any,
  page: number
) => {
  try {
    const request = getRequestWithToken(access_token, "json").get(
      `/dream/sell/continue?page=${page}&size=16`
    );
    return await request;
  } catch (error) {
    throw error;
  }
};
