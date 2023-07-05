import React from "react";

const SignOut = () => {
  //will be transfared to the auth api file
  const logout = () => {
    localStorage.removeItem("token");
    console.log("out");
  };
  //////////////////////////////////////////
  return (
    <>
      <button
        onClick={logout}
        className="bg-[#F0ECCF] text-black px-4 py-2 rounded"
      >
        Logout
      </button>
    </>
  );
};

export default SignOut;
