import { createBrowserRouter } from "react-router-dom";
import  Portfolio from "./Pages/Portfolio";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
    children:[
      {
        path: '/',
        element: <Portfolio />,
      }
    ]
  },
]);
