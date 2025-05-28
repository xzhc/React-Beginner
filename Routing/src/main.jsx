import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { NavBar } from "./NavBar";
//import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
