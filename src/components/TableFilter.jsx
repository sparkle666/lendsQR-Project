import React from "react";

const TableFilter = () => {
  return (
    <div>
      {/* <p>Showing </p> */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span> Showing </span>
        <select
          style={{
            outline: "none",
            border: "none",
            padding: "10px 14px",
            backgroundColor: "#ddd",
          }}
        >
          <option>50</option>
          <option selected>100</option>
          <option>150</option>
        </select>
        <span> out of 100</span>
      </div>
    </div>
  );
};

export default TableFilter;
