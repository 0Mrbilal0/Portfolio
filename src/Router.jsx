import { createBrowserRouter } from "react-router-dom";

import Accueil from "./Pages/Accueil";
import Competences from "./Pages/Competences";
import Portfolio from "./Pages/Portfolio";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil />,
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
    path: '/aboutme',
    element: <AboutMe /> , 
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);
