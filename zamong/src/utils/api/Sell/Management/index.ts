import {
  myOnSaleManagement,
  mySoldOutManagement,
} from "../../../../models/dto/response/sellManagementResponse";
import instance from "../../axios";

export const getSellMyOnSaleManagement = async (page: number) => {
  try {
    const response = await instance.get<myOnSaleManagement>(
      `dream/sell/continue/me?page=${page}&size=8`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getSellSoldOutManagement = async (page: number) => {
  try {
    const response = await instance.get<mySoldOutManagement>(
      `dream/sell/close?page=${page}&size=8`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
