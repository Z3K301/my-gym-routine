import axios from "axios";
import { apiURL } from "../globals";
export const handleLogin = async (user: string, password: string) => {
  const { data } = await axios.post(`${apiURL}users/login`, {
    user,
    password,
  });
  if (data) {
    localStorage.setItem("token", data);
    return true;
  } else {
    return false;
  }
};
