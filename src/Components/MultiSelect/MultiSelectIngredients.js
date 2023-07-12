import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import CreatableSelect from "react-select/creatable";
import { getAllIngredients, createIngredient } from "../../Api/ingredients";

const createOption = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});
const MultiSelectIngredients = ({ valuesString, setValuesString }) => {
  const queryClient = useQueryClient();
  const { data: ingredients } = useQuery({
    queryKey: ["ingredients"],
    queryFn: getAllIngredients,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState([]);
  //selected values

  useEffect(() => {
    if (ingredients) {
      const ingredientsName = ingredients.map((category) => ({
        value: category.name.toLowerCase(),
        label: category.name,
      }));

      setOptions(ingredientsName);
    }
  }, [ingredients]);

  const { mutate: createIngredientFn } = useMutation({
    mutationFn: (category) => createIngredient(category),
    onSuccess: (newCategory) => {
      setIsLoading(false);
      const option = createOption(newCategory.name);
      setOptions((prev) => [...prev, option]);

      queryClient.setQueryData(["ingredients"], (prevData) => [
        ...prevData,
        newCategory,
      ]);
      setValue((prevValue) => [...prevValue, option]);
      setValuesString((prevValue) => [...prevValue, newCategory.name]);
    },
  });

  const handleCreate = (inputValue) => {
    setIsLoading(true);
    createIngredientFn({ name: inputValue });
  };
  const handleSelectChange = (newValue) => {
    const names = newValue.map((v) => v.value);
    setValue(newValue);
    setValuesString(names);
    console.log(names);
  };
  console.log(value);
  console.log(valuesString);
  //https://react-select.com/creatable
  return (
    <div className="px-4 py-6 w-full">
      <CreatableSelect
        isMulti
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={handleSelectChange}
        onCreateOption={handleCreate}
        options={options}
        value={value}
      />
    </div>
  );
};

export default MultiSelectIngredients;
