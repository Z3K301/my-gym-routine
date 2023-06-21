import jwt_decode from "jwt-decode";
interface userData {
  id: number;
}
export const getUserId = () => {
  const { id } = jwt_decode(
    localStorage.getItem("token") as string
  ) as userData;
  console.log(id);
  return id;
};
