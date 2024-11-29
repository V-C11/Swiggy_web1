import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Footer from "./components/Footer.js";
import RestaurentMenu from "./RestaurentMenu.js";
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js";
import Cart from "./components/Cart.js";

const AppLayout = () => {
  return (
    <div className="app">
      <Provider store={appStore}>
        {/* // Header */}
      <Header />
      <Outlet />
      <Footer />
      {/* // Body
    // Footer */}
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurent/:resId',
        element: <RestaurentMenu />
      },
      {
        path: '/cart',
        element: <Cart />
      },
    ],
    errorElement: <Error />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
