import React from "react";
import { FaCalendar } from "react-icons/fa";

const FilterCard = ({display}) => {
  const styles = {
    width: "270px",
    height: "600px",
    background: "#FFFFFF",
    border: "1px solid rgba(84, 95, 125, 0.14)",
    boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
    borderRadius: "4px",
    display: display? "block": "none",
    padding: "14px",
  };
  return (
    <div style={styles}>
      <div class="field">
        <label class="label">Organization</label>
        <div class="control">
          <div class="select" >
            <select id = "select__input">
              <option>Select</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input class="input" type="text" placeholder="User" />
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="Email" />
        </div>
      </div>

      <div class="field">
        <label class="label">Date</label>
        <div class="control has-icons-right">
          <input
            class="input"
            type="email"
            placeholder="Date"
          />
          <span class="icon is-small is-right">
            <FaCalendar />
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Phone Number</label>
        <div class="control">
          <input class="input" type="tel" placeholder="Phone Number" />
        </div>
      </div>
      <div class="field">
        <label class="label">Status</label>
        <div class="control">
          <div class="select">
            <select id = "select__input2">
              <option>Select</option>
              <option>Blacklisted</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-outline">Reset</button>
        </div>
        <div class="control">
          <button class="button is-link" style={{backgroundColor: "#39CDCC"}}>Filter</button>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
