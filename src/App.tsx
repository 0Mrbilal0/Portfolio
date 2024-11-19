import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home';
import { Component } from 'react';
import Portfolio from './Components/portfolio/Portfolio';
import Calendar from './Components/calendar/Calendar';
import Contact from './Components/contact/Contact';

class App extends Component {
  render() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/portfolio',
            element: <Portfolio />
          },
          {
            path: '/calendar',
            element: <Calendar />
          },
          {
            path: '/contact',
            element: <Contact />
          }
        ]
      }
    ])
    return (
        <RouterProvider router={router} />
    )
  }
}

export default App
