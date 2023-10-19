import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { ToggleProvider } from "./Contexts/ToggleProvider";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "./Contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToggleProvider>
        <AuthContext>
          <RouterProvider router={router} />
        </AuthContext>
      </ToggleProvider>
    </ThemeProvider>
  </React.StrictMode>
);
