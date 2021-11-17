import instance from "../../axios";

export const getCalendarData = async (year: number, month: number) => {
  try {
    return await instance.get(
      `/dream/share/timetable/v2?year=${year}&month=${month}`
    );
  } catch (error) {
    throw error;
  }
};
