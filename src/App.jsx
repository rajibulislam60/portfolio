import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './pages/Navbar';
import Bannar from './pages/Bannar';
import About from './pages/About';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout includes Navbar and an outlet for other components
    children: [
      {
        path: "/",
        element: <Bannar />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App