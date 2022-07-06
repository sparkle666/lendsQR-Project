import React, {useRef} from 'react';
import Card from './Card';
import CardList from './CardList';
import Table from "./Table"
import TableFooter from './TableFooter';
import TableFilter from './TableFilter';
import TablePagination from './TablePagination';
import {FaUsers} from "react-icons/fa"

const UserContent = () => {
  const cardRef = useRef()
  let height = cardRef.current.getAttribute("fill")
  console.log(height)

  return (
    <div className = "user__content">
      <p> USERS </p>
      <CardList>
        <Card ref = {cardRef} title="Users" stats={2390} icon = {<FaUsers style={{padding: "8px 0 8px 0", color: "green"}}/>} />
        <Card title="Active Users" stats={2342} />
        <Card title="Users With Loan" stats={12898} />
        <Card title="Users With Savings" stats={128998} />
      </CardList>
      <Table />
      <TableFooter>
        <TableFilter />
        <TablePagination />
      </TableFooter>
    </div>
  );
};

export default UserContent;
