export const handleLogin = async (user: string, password: string) => {
  //TODO axios call to get token
  const token = "1542234555";
  if (token) {
    localStorage.setItem("token", token);
    return true;
  } else {
    return false;
  }
};
