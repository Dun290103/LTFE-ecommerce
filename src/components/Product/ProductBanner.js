import { Tabs, TabList, Tab, TabIndicator } from "@chakra-ui/react";
import { GoTriangleDown } from "react-icons/go";

const ProductBanner = (props) => {
  const { currentSort, onSortChange, onPageSizeChange } = props;

  const handleSortChange = (index) => {
    const newSortValue = index === 0 ? "asc" : "desc";
    if (onSortChange) onSortChange(newSortValue);
  };

  const handlePageSizeChange = (newSize) => {
    if (onPageSizeChange) onPageSizeChange(newSize);
  };

  return (
    <div className="controls-container">
      {/* =========================================================
                            Left Part Start here
        ======================================================== */}

      <div>
        <Tabs
          index={currentSort === "asc" ? 0 : 1}
          onChange={(index) => handleSortChange(index)}
          position="relative"
          variant="unstyled"
        >
          <TabList>
            <Tab>Giá thấp tới cao</Tab>
            <Tab>Giá cao tới thấp</Tab>
          </TabList>
          <TabIndicator mt="-1.5px" height="2px" bg="black" borderRadius="1px" />
        </Tabs>
      </div>
      {/* =========================================================
                            Left Part End here
        ======================================================== */}
      {/* =========================================================
                            Right Part STart here
        ======================================================== */}

      <div className="pagination-select-container">
        <label className="pagination-label">Show:</label>
        <select
          className="pagination-select"
          onChange={(e) => handlePageSizeChange(+e.target.value)}
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="36">36</option>
          <option value="48">48</option>
        </select>
        <span className="pagination-dropdown-icon">
          <GoTriangleDown />
        </span>
      </div>
      {/* =========================================================
                            Right Part End here
        ======================================================== */}
    </div>
  );
};

export default ProductBanner;
