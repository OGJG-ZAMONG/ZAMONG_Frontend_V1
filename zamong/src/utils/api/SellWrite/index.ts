import uri from "../../../constance/uri";
import { sellWriteResponse } from "../../../models/dto/request/sellWriteResquest";
import instance from "../axios";

export const postSellDream = async (data: sellWriteResponse) => {
  try {
    await instance.post(uri.dreamSell, data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
