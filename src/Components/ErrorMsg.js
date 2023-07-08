import React from "react";

const ErrorMsg = ({ error }) => {
  // console.log(error);
  if (!error) return "";
  return (
    <div className="bg-red-500 p-3 rounded-md text-black mb-2">
      {error?.response?.data?.error?.message ||
        error?.response?.data?.errors.map((error) => {
          return (
            <div>
              {Object.values(error).map((value) => {
                return <div key="api-error">{value}</div>;
              })}
            </div>
          );
        }) ||
        error.message}
    </div>
  );
};

export default ErrorMsg;
