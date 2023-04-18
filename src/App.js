import React, { Children, lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/constact";
import Menu from "./components/RestaurentMenu";
import Profile from "./components/Profile";
import usersContext from "../utils/UserContext";
import { Provider } from "react-redux";
import store from "../utils/store";
import { Card } from "./constant";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"));
// driven ui

const AppLayout = () => {
  const [user, setuser] = useState({
    name: "shubham",
    email: "email@gmail",
  });

  return (
    <Provider store={store}>
      <usersContext.Provider value={{ users: user }}>
        <HeaderComponent />
        <Outlet />
        <Footer />
      </usersContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        // for rendering this chile we have to use outlet in its parent component !
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:id",
        element: <Menu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loding .... </h1>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path : '/cart',
        element : <Cart />
      }
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
