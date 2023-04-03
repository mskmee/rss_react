import React from 'react';
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header';
import { FormPage } from './pages/FormPage/FormPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '/404',
        element: <NotFoundPage />,
      },
      {
        path: '/form',
        element: <FormPage />,
      },
      {
        path: '*',
        element: <Navigate to="/404" />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
