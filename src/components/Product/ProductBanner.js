import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { GoTriangleDown } from "react-icons/go";

const ProductBanner = (props) => {
  const { currentSort, onChange, onPageSizeChange } = props;

  const handleSortChange = (newValue) => {
    if (onChange) onChange(newValue);
  };

  const handlePageSizeChange = (newSize) => {
    if (onPageSizeChange) onPageSizeChange(newSize);
  };

  return (
    <div className="controls-container">
      {/* =========================================================
                            Left Part Start here
        ======================================================== */}

      <div className="sort-options">
        <Tabs
          id="controlled-tab-example"
          activeKey={currentSort}
          onSelect={(k) => handleSortChange(k)}
        >
          <Tab eventKey="asc" title="Giá thấp tới cao"></Tab>
          <Tab eventKey="desc" title="Giá cao tới thấp"></Tab>
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
