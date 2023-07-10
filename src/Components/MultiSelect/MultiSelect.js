import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CreatableSelect from "react-select/creatable";
import { getAllCategories } from "../../Api/categories";
const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});
const MultiSelect = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  const categoriesName = categories?.map((category) => ({
    value: category.name.toLowerCase(),
    label: category.name,
  }));
  console.log(categoriesName);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(categoriesName);
  const [value, setValue] = useState(null);

  const handleCreate = (inputValue) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      console.log(options);
      setValue(newOption);
    }, 1000);
    ç;
  };

  //https://react-select.com/creatable
  return (
    <div className="px-4 py-6">
      <CreatableSelect
        //defaultValue={categoriesName}
        isMulti
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={(newValue) => setValue(newValue)}
        onCreateOption={handleCreate}
        //onCreateOption={handleCreate}
        options={options}
        value={value}
      />
    </div>
  );
};

export default MultiSelect;
