import React from 'react';


const Card = ({ title, stats, icon }) => {
  return (
    <div className="card">
      {icon ? (
        <span> {icon} </span>
      ) : (
        // <CheckCircleTwoTone className="card__icon" />""
        ""
      )}
      <p className="card__title"> {title} </p>
      <p className="card__stats">{stats.toLocaleString()}</p>
    </div>
  );
};

export default Card;
