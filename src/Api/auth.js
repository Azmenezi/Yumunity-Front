import instance from ".";
import jwt_decode from "jwt-decode";

const signup = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) formData.append(key, userInfo[key]);
  const { data } = await instance.post("/users/signup", formData);
  storeToken(data.token);
  return data;
};

const signin = async (userInfo) => {
  const { data } = await instance.post("/users/signin", userInfo);
  storeToken(data.token);
  return data;
};
const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        localStorage.removeItem("token");
        return false;
      }
      return true;
    } catch (error) {
      console.log("Invalid token:", error);
      localStorage.removeItem("token");
      return false;
    }
  }
  return false;
};
const signout = () => {
  localStorage.removeItem("token");
};
export { signin, signup, storeToken, checkToken, signout };
