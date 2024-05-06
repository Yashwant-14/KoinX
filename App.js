import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import CoinPage from "./src/components/CoinPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // Correct imports
import "react-alice-carousel/lib/alice-carousel.css";
import ComparePage from "./src/components/ComparePage";
import Search from "./src/components/Search";
import CryptoContext from "./src/config/CryptoContext";
import Alert from "./src/components/Alert";

const App = () => {
  return (
    <CryptoContext>
      <div>
        <Header />
        <Outlet /> {/* Use Outlet instead of outlet */}
        <Alert />
      </div>
    </CryptoContext>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/:coinId",
        element: <CoinPage />,
      },
      {
        path: "/compare_page",
        element: <ComparePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")); // Correct import
root.render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
