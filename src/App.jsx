import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './pages/Navbar';
import Bannar from './pages/Bannar';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Bannar />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const App = () => {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <About/>
    </>
  );
}

export default App