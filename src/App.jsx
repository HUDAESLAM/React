// import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import  Home  from "./Home/Home";
import  About  from "./About/About";
import  Portfolio  from "./Portfolio/Portfolio";
import  Contact  from "./Contact/Contact";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
