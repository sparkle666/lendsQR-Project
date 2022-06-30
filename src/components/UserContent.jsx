import React from 'react';
import Card from './Card';
import CardList from './CardList';

const UserContent = () => {
  return (
    <div className = "user__content">
      <p> USERS </p>
      <CardList>
        <Card title="Users" stats={2390} />
        <Card title="Active Users" stats={2342} />
        <Card title="Users With Loan" stats={12898} />
        <Card title="Users With Savings" stats={128998} />
      </CardList>
    </div>
  );
};

export default UserContent;
