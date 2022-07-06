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
          <span
            style={{ display: "flex", alignItems: "center", padding: "6px" }}
          >
            <FaUsers />
          </span>
        </div>
      ) : (
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
          <span
            style={{ display: "flex", alignItems: "center", padding: "6px" }}
          >
            <BsDisplay />
          </span>
        </div>
      )}
      <p className="card__title"> {title} </p>
      <p className="card__stats">{stats.toLocaleString()}</p>
    </div>
  );
};

export default Card;
