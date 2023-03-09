import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';

export function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/404" element={<NotFoundPage />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </HashRouter>
  );
}
