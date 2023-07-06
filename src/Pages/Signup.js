import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../Api/auth";
import { useNavigate } from "react-router-dom";
import ErrorMsg from "../Components/ErrorMsg";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const pass = "";

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
      if (userInfo.pasword) pass = userInfo.password;
    } else {
      //username, password, email
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };
  const {
    mutate: registerFn,
    error,
    response,
  } = useMutation({
    mutationFn: () => signup(userInfo),
    onSuccess: () => {
      navigate("/");
      //   if (localStorage.getItem("token")) {
      //     navigate("/");
      //   }
    },
    onError: (err) => {
      console.log("herre", error?.message);
      //alert(err);
    },
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add register logic here
    // console.log("test")
    registerFn();
  };

  const handlepassword = (e) => {
    e.preventDefault();
    setConfirmPassword(e.target.value);
    console.log(userInfo.password);

    // if (password == userInfo.password) console.log("truee");
  };
  const match = userInfo.password == confirmPassword;

  console.log(match);

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md">
        <h2 className="text-3xl text-white font-semibold mb-6">
          Sign up as a new user
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4"></div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm_password"
              className="block text-white text-sm font-medium mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              onChange={handlepassword}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-white text-sm font-medium mb-2"
            >
              Profile Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div> */}
          {/* {error?.response.data.error?.message ||
            error?.response.data?.errors[1].password}
          {console.log(
            "herre",
            error?.response.data.error || error?.response.data.errors[0]
          )} */}

          <ErrorMsg error={error} />
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
