import '../style.scss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from "./SideBar"

export const Content = () => {
  return (
    <div>
      <h1>
      ""
      </h1>
    </div>
  );
};
const Layout = () => {
  return (
    <div>
      <section className="layout">
        <div className="header">1</div>
        <div className="main">
          <div className="sidebar"><SideBar /></div>
          <div className="body">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
