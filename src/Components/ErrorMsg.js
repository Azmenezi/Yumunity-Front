import React from "react";

const ErrorMsg = ({ error }) => {
  // console.log(error);
  if (!error) return null;

  let errorMessage = error?.response?.data?.error?.message;
  let errorList = error?.response?.data?.errors;

  if (errorMessage && errorMessage.includes("username")) {
    errorMessage = "Username already in use";
  } else if (errorMessage && errorMessage.includes("dup key: { email:")) {
    errorMessage = "Email already in use";
  } else if (
    errorMessage &&
    (errorMessage.includes("Invalid password") ||
      errorMessage.includes("Invalid email"))
  ) {
    errorMessage = "Invalid email or password";
  }

  return (
    <div className="bg-red-500 p-3 rounded-md text-black mb-2">
      {errorMessage ||
        (errorList &&
          errorList.map((error, index) => (
            <div key={index}>
              {Object.values(error).map((value, i) => (
                <div key={`api-error-${i}`}>{value}</div>
              ))}
            </div>
          ))) ||
        error.message}
    </div>
  );
};

export default ErrorMsg;
