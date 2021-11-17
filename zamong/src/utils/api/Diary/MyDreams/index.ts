import instance from "../../axios";

export const getMyDreamData = async (
  type: string | null,
  page: number,
  shared: boolean
) => {
  try {
    return await instance.get(
      `/dream/share/me?page=${page}&size=16&sort=${type}&shared=${shared}`
    );
  } catch (error) {
    throw error;
  }
};

export const getDreamsWrittenToday = async () => {
  try {
    return await instance.get(`/dream/share/me/today`);
  } catch (error) {
    throw error;
  }
};
