import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Calculator from './pages/Calculator';
import CalculatorError from './pages/CalculatorError';
import CalculatorSuccessful from './pages/CalculatorSuccessful';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Calculator', element: <Calculator /> },
{ path: '/CalculatorError', element: <CalculatorError /> },
{ path: '/CalculatorSuccessful', element: <CalculatorSuccessful /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}