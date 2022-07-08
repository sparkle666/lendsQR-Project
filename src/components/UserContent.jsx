import React from 'react';
import Card from './Card';
import CardList from './CardList';
import Table from "./Table"
import TableFooter from './TableFooter';
import TableFilter from './TableFilter';
import TablePagination from './TablePagination';
import {FaUsers} from "react-icons/fa"
import FilterCard from './FilterCard';

const UserContent = () => {

  return (
    <div className = "user__content">
      <p> USERS </p>
      <CardList>
        <Card title="Users" stats={2390} icon = {<FaUsers />} />
        <Card title="Active Users" stats={2342} />
        <Card title="Users With Loan" stats={12898} />
        <Card title="Users With Savings" stats={128998} />
      </CardList>
      <Table />
      <TableFooter>
        <TableFilter />
        <TablePagination />
      </TableFooter>
      <FilterCard display={true} />
    </div>
  );
};

export default UserContent;
