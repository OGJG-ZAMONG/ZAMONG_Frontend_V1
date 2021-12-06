import instance from "../axios";
export const getChatRooms = async () => {
  try {
    return await instance.get(`/dream/sell/room`);
  } catch (error) {
    throw error;
  }
};

export const getChat = async (room: string | undefined) => {
  try {
    return await instance.get(`/dream/sell/chat/${room}?page=0&size=100`);
  } catch (error) {
    throw error;
  }
};

export const endIntersaction = async (uuid: string) => {
  try {
    return await instance.post(`/dream/sell/${uuid}/done`);
  } catch (error) {
    throw error;
  }
};
