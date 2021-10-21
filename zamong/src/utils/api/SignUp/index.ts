import uri from "../../../constance/uri";
import { getRequest } from "../default";
interface InputType {
  name: string;
  email: string;
  authentication_code: string;
  id: string;
  password: string;
}

export const authEnticationCode = async (address: string) => {
  try {
    const request = getRequest();
    const response = await request.post(uri.sendEmail, { address });
    return response;
  } catch (error) {
    return error;
  }
};

export const signUp = async (inputs: InputType) => {
  try {
    const request = getRequest();
    const response = await request.post(uri.signup, inputs);
    return response;
  } catch (error) {
    return error;
  }
};

export const checkIdDuplicate = async (id: string) => {
  try {
    const request = getRequest();
    await request.post(uri.idDuplicate, { id });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
