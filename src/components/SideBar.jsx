import React from "react";
import { NavLink } from "react-router-dom";
// import { SmileTwoTone } from '@ant-design/icons';
const SideBar = () => {
  return (
    <>
      <Links />
      <Links />
    </>
  );
};
export default SideBar;

const Links = () => {
  return (
    <NavLink
      style={({ isActive }) => {
        return isActive
          ? {
              display: "block",
              margin: "0 0",
              padding: "8px",
              color: isActive ? "#213f7d" : "",
              backgroundColor: isActive ? "rgba(57, 205, 204, 0.06)" : "",
              borderLeft: isActive ? "4px solid #39CDCC" : "",
            }
          : {
              display: "block",
              margin: "0 0",
              padding: "8px",
            };
      }}
      to="/"
      className="sidebar__link"
    >
      Users
    </NavLink>
  );
};
