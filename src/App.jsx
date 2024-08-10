import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './pages/Navbar';
import Bannar from './pages/Bannar';
import About from './pages/About';
import CV from './Components/CV';
import Service from './pages/Service';
import Resume from './pages/Resume';

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
      {
        path: "cv",
        element: <CV />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "resume",
        element: <Resume />,
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