import React, { useState, useEffect } from "react";
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

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  //selected values
  const [value, setValue] = useState([]);
  useEffect(() => {
    if (categories) {
      const categoriesName = categories.map((category) => ({
        value: category.name.toLowerCase(),
        label: category.name,
      }));

      setOptions(categoriesName);
    }
  }, [categories]);

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
      setValue((prevValue) => [...prevValue, option]);
    },
  });

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
        isMulti
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={(newValue) => setValue(newValue)}
        onCreateOption={handleCreate}
        options={options}
        value={value}
      />
    </div>
  );
};

export default MultiSelect;
