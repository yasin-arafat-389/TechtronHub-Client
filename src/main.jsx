import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { ToggleProvider } from "./Contexts/ToggleProvider";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToggleProvider>
        <RouterProvider router={router} />
      </ToggleProvider>
    </ThemeProvider>
  </React.StrictMode>
);
