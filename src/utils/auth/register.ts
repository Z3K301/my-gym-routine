import axios from "axios";
import { apiURL } from "../globals";
//TODO Handle error
export const handleRegister = async (
  user: string,
  mail: string,
  password: string
) => {
  const { data } = await axios.post(`${apiURL}users`, {
    user,
    email: mail,
    password,
  });
  if (data) {
    localStorage.setItem("token", data);
    return true;
  } else {
    return false;
  }
};
