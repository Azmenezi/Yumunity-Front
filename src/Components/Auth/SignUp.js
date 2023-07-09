import React from "react";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../Api/auth";
import { useNavigate } from "react-router-dom";
import ErrorMsg from "../ErrorMsg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import * as Yup from "yup";
const SignUp = () => {
  const [user, setUser] = useContext(UserContext);
  const initialValues = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .required("Password is required")
      .matches(/.{8,}$/, "Password must be at least 8 characters long.")
      ?.matches(/\d/, "Password must contain a number.")
      ?.matches(/[A-Z]/, "Password must contain an uppercase letter.")
      ?.matches(/[a-z]/, "Password must contain a lowercase letter.")
      ?.matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain a symbol."),
    passwordConfirmation: Yup.string()
      .required("Confirmation password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const navigate = useNavigate();

  const { mutate: registerFn, error } = useMutation({
    mutationFn: (values) => signup(values),
    onSuccess: () => {
      setUser(true);
      navigate("/");
    },
    onError: (e) => {
      console.log(e);
    },
  });
  if (user) return navigate("/");
  const handleFormSubmit = (values, helpers) => {
    registerFn(values);
  };

  return (
    <div className="max-w-md w-full px-6 py-8 bg-[#A3BB98] rounded-md shadow-md">
      <h2 className="text-3xl text-white font-semibold mb-6">Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-white text-sm font-medium mb-2"
              >
                Username
              </label>
              <Field
                name="username"
                type="text"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.username && touched.username
                    ? "border-red-500"
                    : "border-gray-700"
                }`}
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm font-medium mb-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium mb-2"
              >
                Email
              </label>
              <Field
                name="email"
                type="email"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-700"
                }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm font-medium mb-2"
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
              <Field
                name="password"
                type="password"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.password && touched.password
                    ? "border-red-500"
                    : "border-gray-700"
                }`}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm font-medium mb-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="passwordConfirmation"
                className="block text-white text-sm font-medium mb-2"
              >
                Confirm Password
              </label>
              <Field
                name="passwordConfirmation"
                type="password"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.passwordConfirmation && touched.passwordConfirmation
                    ? "border-red-500"
                    : "border-gray-700"
                }`}
              />
              <ErrorMessage
                name="passwordConfirmation"
                component="div"
                className="text-red-500 text-sm font-medium mb-2"
              />
            </div>

            <ErrorMsg error={error} />
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-white rounded-md hover:bg-[#FFD98F] transition-colors"
              >
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
