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
    const response = await request.post(uri.sendEmail, {address});
    console.log(response.data);
  } catch (error) {
    return error;
  }
};

export const signUp = async (inputs : InputType) => {
  try {
    const request = getRequest();
    const response = await request.post(uri.signup, inputs);
    console.log(response.data);
  } catch (error) {
    return error;
  }
}