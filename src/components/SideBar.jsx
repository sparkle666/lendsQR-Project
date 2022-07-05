import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import {
  FaUserFriends,
  FaUsers,
  FaPiggyBank,
  FaUniversity,
  FaCoins,
  FaChartBar,
  FaSlidersH,
  FaPercentage,
  FaClipboardList,
  FaUserCog,
  FaHandHoldingUsd,
  FaHandshake,
  FaUserPlus,
  FaUserTimes,
  FaBriefcase,
  FaUsersSlash,
  FaUserCheck,
} from "react-icons/fa";

const SideBar = () => {
  let iconNames = [
    <FaUserFriends />,
    <FaUsers />,
    <FaHandHoldingUsd />,
    <FaPiggyBank />,
    <FaHandshake />,
    <FaHandHoldingUsd />,
    <FaUserCheck />,
    <FaUserPlus />,
  ];
  let iconTitle = [
    "Users",
    "Guarantors",
    "Loans",
    "Decision Models",
    "Savings",
    "Loan Requests",
    "Whitelist",
    "Karma",
  ];
  let iconNames2 = [
    <FaBriefcase />,
    <FaHandHoldingUsd />,
    <FaUniversity />,
    <FaCoins />,
    <FaHandshake />,
    <FaHandHoldingUsd />,
    <FaUserCog />,
    <FaUserPlus />,
    <FaChartBar />,
  ];
  let iconTitle2 = [
    "Organization",
    "Loan Products",
    "Savings Products",
    "Fees and Charges",
    "Transactions",
    "Services",
    "Service Accounts",
    "Settlements",
    "Reports",
  ];
  return (
    <>
      <div class="control has-icons-left">
        <div class="select">
          <select style = {{border: "none"}}>
            <option>Select</option>
            <option>Lendersqr</option>
            <option selected>Lendster</option>
          </select>
        </div>
        <span class="icon is-left">
          <FaBriefcase />
        </span>
      </div>
      <p style={{ marginLeft: "10px", marginTop: "14px" }}>CUSTOMERS</p>
      {iconTitle.map((title, index) => (
        <Links name={title} icon={iconNames[index]} />
      ))}
      <p style={{ marginLeft: "10px", marginTop: "14px" }}>BUSINESSES</p>
      {iconTitle2.map((title, index) => (
        <Links name={title} icon={iconNames2[index]} />
      ))}
    </>
  );
};
export default SideBar;

export const Links = ({ name, icon }) => {
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
      to="/home"
      className="sidebar__link"
    >
      <span>{icon}</span>
      {name}
    </NavLink>
  );
};
