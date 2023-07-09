import React from "react";
import { checkToken } from "../../Api/auth";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const SignOut = () => {
  const [user, setUser] = useContext(UserContext);
  const logout = () => {
    localStorage.removeItem("token");
    setUser(checkToken());
  };
  return (
    <>
      <button
        onClick={logout}
        className="bg-[#F0ECCF] text-black px-4 py-2 rounded"
      >
        Sign out
      </button>
    </>
  );
};

export default SignOut;
