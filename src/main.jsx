import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Business from './components/Business/Business.jsx'
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import Guide from './components/Guide/Guide.jsx';
import Online from './components/Guide/Online.jsx';
import Local from './components/Guide/Local.jsx';
import Egift from './components/Guide/Egift.jsx';
import Benefits from './components/Benefits/Benefits.jsx';
import Refer from './components/Refer/Refer.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/opportunity',
        element: <Business />
      },
      {
        path: '/how-to',
        element: <Guide />
      },
      {
        path: '/online-shop',
        element: <Online />
      },
      {
        path: '/egift-card',
        element: <Egift />
      },
      {
        path: '/local-shop',
        element: <Local />
      },
      {
        path: '/benefits',
        element: <Benefits />
      },
      {
        path: '/refer',
        element: <Refer/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)