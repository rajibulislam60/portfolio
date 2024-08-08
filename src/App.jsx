import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './pages/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App