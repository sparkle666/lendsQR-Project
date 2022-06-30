import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import Login from './components/Login';
import Empty from './components/Empty';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //     <Route path="dashboard" element={<Dashboard />} />
  //     <Route path="*" element={<Empty />} />
  //   </Routes>
  // </BrowserRouter>
);
