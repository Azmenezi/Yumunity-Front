import React from "react";

const Input = ({ name, type, onChange }) => {
  const handleLabelClick = (e) => {
    e.stopPropagation();
  };

  if (type === "file") {
    return (
      <div className="flex justify-start ml-3">
        <h1 className="w-[25%]">{name}</h1>
        <label
          onClick={handleLabelClick}
        >
          <input
            name={name}
            type={type}
            onChange={onChange}
            className="hidden"
            required
          />
          <span className="px-2 py-1 bg-gray-200 cursor-pointer rounded-md">
            Select a file
          </span>
        </label>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <h1 className="w-[25%]">{name}</h1>
      <input
        name={name}
        type={type}
        onChange={onChange}
        className="w-[70%] border pl-2 border-black rounded-md"
        placeholder={name}
        required
      />
    </div>
  );
};

export default Input;
