import uri from "../../../constance/uri";
import instance from "../axios";
import {
  chat,
  chatList,
  sellDreamDetailResponse,
} from "../../../models/dto/response/sellDreamDetailResponse";

export const getSellDream = async (uuid: string) => {
  try {
    const response = await instance.get<chat>(
      uri.sellDreamInfo.replace("DREAM_UUID", uuid)
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getChatRequest = async (uuid: string) => {
  try {
    const response = await instance.get<chatList>(
      uri.chatRequest.replace("DREAM_UUID", uuid)
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const delSellPost = async (uuid: string) => {
  try {
    const response = await instance.delete(
      uri.deleteSell.replace("DREAM_UUID", uuid)
    );
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}