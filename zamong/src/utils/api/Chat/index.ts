import instance from "../axios";
export const getChatRooms = async () => {
  try {
    return await instance.get(`/dream/sell/room`);
  } catch (error) {
    throw error;
  }
};
