import React from "react";
import { BsDisplay } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

const Card = ({ title, stats, icon }) => {
  return (
    <div className="card">
      {icon ? (
        <div
          style={{
            backgroundColor: "pink",
            // padding: "8px",
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            textAlign: "center",
          }}
        >
          <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>
        </div>
      ) : (
        // <CheckCircleTwoTone className="card__icon" />""
        <span style={{ backgroundColor: "pink", padding: "10px" }}>
          <FaUsers />
        </span>
      )}
      <p className="card__title"> {title} </p>
      <p className="card__stats">{stats.toLocaleString()}</p>
    </div>
  );
};

export default Card;
