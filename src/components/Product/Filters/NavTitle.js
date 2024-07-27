import React from "react";

const NavTitle = (props) => {
  const { title } = props;

  return (
    <div className="d-flex align-items-center justify-content-between pb-4">
      <h3
        style={{
          fontSize: "1.25rem",
          lineHeight: "1.75rem",
          fontWeight: "bold",
        }}
      >
        {title}
      </h3>
    </div>
  );
};

export default NavTitle;
