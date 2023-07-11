import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import CreatableSelect from "react-select/creatable";
import { getAllCategories, createCategory } from "../../Api/categories";

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});
const MultiSelect = () => {
  const queryClient = useQueryClient();
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  const categoriesName = categories?.map((category) => ({
    value: category.name.toLowerCase(),
    label: category.name,
  }));

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(categoriesName);
  const [value, setValue] = useState(null);
  const { mutate: createCategoryFn } = useMutation({
    mutationFn: (v) => createCategory(v),
    onSuccess: (newCategory) => {
      setIsLoading(false);
      const option = createOption(newCategory.name);
      setOptions((prev) => [...prev, option]);

      queryClient.setQueryData(["categories"], (prevData) => [
        ...prevData,
        newCategory,
      ]);
      setValue(option);
    },
  });
  // const handleCreate = (inputValue) => {
  //   console.log(inputValue);
  //   inputValue = { name: inputValue };
  //   console.log(inputValue);
  //   createCategoryFn(inputValue);
  // };

  const handleCreate = (inputValue) => {
    console.log(inputValue);
    setIsLoading(true);
    console.log(inputValue);
    inputValue = { name: inputValue };
    createCategoryFn(inputValue);
    console.log(options);
  };
  //https://react-select.com/creatable
  return (
    <div className="px-4 py-6">
      <CreatableSelect
        // defaultValue={categoriesName}
        isMulti
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={(newValue) => setValue(newValue)}
        //onCreateOption={handleCreate}
        onCreateOption={handleCreate}
        options={options}
        value={value}
      />
    </div>
  );
};

export default MultiSelect;
