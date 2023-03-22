import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header';
import { FormPage } from './pages/FormPage';
import { Cards } from './pages/Cards';

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cards" element={<Cards />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/404" element={<NotFoundPage />}></Route>
        <Route path="/form" element={<FormPage />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
