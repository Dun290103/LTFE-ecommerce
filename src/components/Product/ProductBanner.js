import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const ProductBanner = (props) => {
  const { currentSort, onChange } = props;

  const handleSortChange = (newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <div>
      {/* =========================================================
                            Left Part Start here
        ======================================================== */}

      <div>
        <Tabs
          id="controlled-tab-example"
          activeKey={currentSort}
          onSelect={(k) => handleSortChange(k)}
          className="mb-3"
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
      <div>Right Part</div>
    </div>
  );
};

export default ProductBanner;
