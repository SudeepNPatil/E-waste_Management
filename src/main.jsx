import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Trackpickup from "./components/Trackpickup";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Sell_E_waste from "./components/Sell_E_waste";
import Authcomponent from "./components/Authcomponent";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "Sell_E_waste",
        element: <Sell_E_waste />

      },
      {
        path: "Trackpickup",
        element: <Trackpickup />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },

    ],
  },
  {
    path: "/Authcomponent",
    element: <Authcomponent />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


