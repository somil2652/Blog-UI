import axios from "axios";
import { Base_User_Url } from "../../config/config";

const login = async (values) => {
  return await axios.post(`${Base_User_Url}/login`, values);
};

const register = async (values) => {
  return await axios.post(`${Base_User_Url}/register`, values);
};

export { login, register };
