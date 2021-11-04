import uri from "../../../constance/uri";
import instance from "../axios";

interface InputType {
  name: string;
  email: string;
  authentication_code: string;
  id: string;
  password: string;
}

export const authEnticationCode = async (address: string) => {
  try {
    const response = instance.post(uri.sendEmail, { address });
    return response;
  } catch (error) {
    return error;
  }
};

export const signUp = async (inputs: InputType) => {
  try {
    const response = instance.post(uri.signup, inputs);
    return response;
  } catch (error) {
    return error;
  }
};

export const checkIdDuplicate = async (id: string) => {
  try {
    await instance.post(uri.idDuplicate, { id });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
