import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CreatableSelect from "react-select/creatable";
import { getAllCategories } from "../../Api/categories";

const MultiSelect = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });
  const categoriesName = categories?.map((category) => ({
    value: category.name,
    label: category.name,
  }));
  const [selectedOption, setSelectedOption] = useState(null);
  //https://react-select.com/creatable
  return (
    <div className="px-4 py-6">
      <CreatableSelect
        defaultValue={selectedOption}
        isMulti
        onChange={setSelectedOption}
        options={categoriesName}
      />
    </div>
  );
};

export default MultiSelect;
