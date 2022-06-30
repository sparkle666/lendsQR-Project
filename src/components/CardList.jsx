import React from 'react';

const CardList = (props) => {
  return (
    <div className = "card__list">
      {props.children}
    </div>
  );
};

export default CardList;
