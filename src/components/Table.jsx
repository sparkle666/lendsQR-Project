import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";

const Table = () => {
  return (
    <div className="table-container">
    <table className="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th> <span> Organization <BsFilter style = {{fontSize: "20px", fontWeight: "600"}} /> </span> </th>
          <th> <span> Username <BsFilter style = {{fontSize: "20px", fontWeight: "600"}} /> </span> </th>
          <th> <span> Email <BsFilter style = {{fontSize: "20px", fontWeight: "600"}} /> </span> </th>
          <th> <span> Phone Number <BsFilter style = {{fontSize: "20px", fontWeight: "600"}} /> </span> </th>
          <th> <span> Date Joined <BsFilter style = {{fontSize: "20px", fontWeight: "600"}} /> </span> </th>
          <th> <span> Status <BsFilter style = {{fontSize: "20px", fontWeight: "600"}} /> </span> </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lendersqr</td>
          <td>Darly James</td>
          <td>Jarrell.Robel@gmail.com</td>
          <td>+234-640-386-189</td>
          <td>2022-06-28T15:49:09.713Z</td>
          <td><span className="tag is-danger is-light">BlackListed</span></td>
          <td><FaEllipsisV /></td>
        </tr>
        <tr>
        <td>Lendersqr</td>
          <td>Darly James</td>
          <td>Jarrell.Robel@gmail.com</td>
          <td>+234-640-386-189</td>
          <td>2022-06-28T15:49:09.713Z</td>
          <td><span className="tag">Inactive</span></td>
          <td><FaEllipsisV /></td>
        </tr>
        <tr>
        <td>Lendersqr</td>
          <td>Darly James</td>
          <td>Jarrell.Robel@gmail.com</td>
          <td>+234-640-386-189</td>
          <td>2022-06-28T15:49:09.713Z</td>
          <td><span className="tag is-warning is-light">Pending</span></td>
          <td><FaEllipsisV /></td>
        </tr>
        <tr>
        <td>Lendersqr</td>
          <td>Darly James</td>
          <td>Jarrell.Robel@gmail.com</td>
          <td>+234-640-386-189</td>
          <td>2022-06-28T15:49:09.713Z</td>
          <td><span className="tag is-danger is-light">BlackListed</span></td>
          <td><FaEllipsisV /></td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default Table;
