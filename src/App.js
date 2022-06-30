import React from 'react';
import './style.scss';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import UserContent from './components/UserContent';
import Empty from './components/Empty';

export default function App() {
  return (
    // <div>
    //  <Login />
    // </div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UserContent />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Empty />} />
    </Routes>
  );
}
