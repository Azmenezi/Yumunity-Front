import React from "react";
import { useMutation } from "@tanstack/react-query";
import { signin } from "../../Api/auth";
import { useNavigate } from "react-router-dom";
import ErrorMsg from "../ErrorMsg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import * as Yup from "yup";
import Google from "../../svg/google.svg";
const SignIn = () => {
  const [user, setUser] = useContext(UserContext);
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required("Password is required"),
  });
  const navigate = useNavigate();

  const { mutate: loginFn, error } = useMutation({
    mutationFn: (values) => signin(values),
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
    loginFn(values);
  };

  return (
    <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md">
      <h2 className="text-3xl text-white font-semibold mb-6">Sign in</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched }) => (
          <Form>
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

            <ErrorMsg error={error} />
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Login
              </button>
              <div className="flex justify-center">
                <button className="px-4 py-2 bg-blue-300 text-white rounded-md hover:bg-blue-600 transition-colors mx-3">
                  <img style={{ width: "30px" }} src={Google} alt="google" />
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
