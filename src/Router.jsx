import { createBrowserRouter } from "react-router-dom";

import Accueil from "./Pages/Acceuil";
import Competences from "./Pages/Competences";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/competences',
    element: <Competences />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);
