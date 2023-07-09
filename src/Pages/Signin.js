import React from "react";
import SignIn from "../Components/Auth/SignIn";
// import { signin } from "../Api/auth";

const Signin = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <SignIn />
    </div>
  );
};

export default Signin;
