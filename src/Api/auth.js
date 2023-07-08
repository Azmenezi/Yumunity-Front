import instance from ".";
import jwt_decode from "jwt-decode";

const signup = async (userInfo) => {
  // try {
  const formData = new FormData();
  for (const key in userInfo) formData.append(key, userInfo[key]);
  const { data } = await instance.post("/users/signup", formData);
  // console.log(data);
  storeToken(data.token);

  return data;
  // } catch (error) {
  //   console.log(error.response.data.error.message);
  // }
};

const signin = async (userInfo) => {
  try {
    const { data } = await instance.post("/users/signin", userInfo);
    storeToken(data.access);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decoded = jwt_decode(token);
    const cureentTime = Date.now() / 1000;
    if (decoded.exp < cureentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};
export { signin, signup, storeToken, checkToken };
