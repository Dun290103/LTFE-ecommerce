import React from "react";
import FilterByCategory from "./Filters/FilterByCategory";

const ProductFilters = (props) => {
  const { filters, onChange } = props;

  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      categoryId: newCategoryId,
    };
    onChange(newFilters);
  };

  return (
    <div className="filter-container">
      <FilterByCategory onChange={handleCategoryChange} />
    </div>
  );
};

export default ProductFilters;
