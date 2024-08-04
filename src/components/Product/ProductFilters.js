import React from "react";
import FilterByCategory from "./Filters/FilterByCategory";

const ProductFilters = (props) => {
  const { filters, onChange } = props;

  const handleFilterChange = (filterName, newValue) => {
    if (!onChange) return;

    const newFilters = {
      [filterName]: newValue,
      _page: 1,
    };
    onChange(newFilters);
  };

  return (
    <div className="filter-container">
      <FilterByCategory onChange={handleFilterChange} />
    </div>
  );
};

export default ProductFilters;
