import instance from ".";
import jwt_decode from "jwt-decode";

const signup = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);
    const { data } = await instance.post("/users/signup", formData);
    storeToken(data.access);

    return data;
  } catch (error) {
    console.log(error.response.data.error.message);
    if (error.response.data.details?.password.includes("/[a-zA-Z0-9]{8,}/")) {
      alert(
        "Password must at least 8 digits with a combination of numbers and letters"
      );
    }
    if (error.response.data.message?.includes("E11000 duplicate key error")) {
      alert("Username already exists, please use another username");
    }
  }
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
