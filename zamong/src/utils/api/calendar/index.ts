import { getRequestWithToken } from "../default";

export const getCalendarData = async (access_token:any, year: number, month: number) => {
    try {
        const request = getRequestWithToken(access_token, "json");
        return await request.get(`/dream/share/timetable/v2?year=${year}&month=${month}`);
    } catch(error) {
        throw error;
    }
}