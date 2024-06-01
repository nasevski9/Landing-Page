import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'

import Business from './components/Usa/Business/Business.jsx'
import Error from './components/Usa/Error/Error.jsx';
import Home from './components/Usa/Home/Home.jsx';
import Guide from './components/Usa/Guide/Guide.jsx';
import Online from './components/Usa/Guide/Online.jsx';
import Local from './components/Usa/Guide/Local.jsx';
import Egift from './components/Usa/Guide/Egift.jsx';
import Benefits from './components/Usa/Benefits/Benefits.jsx';
import Refer from './components/Usa/Refer/Refer.jsx';
import Owner from './components/Usa/Owner/Owner.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

import Choice from './components/Choice/Choice.jsx';
import HomeMk from './components/Mk/HomeMk/HomeMk.jsx';
import BusinessMk from './components/Mk/BusinessMk/BusinessMk.jsx';
import BenefitsMk from './components/Mk/BenefitsMk/BenefitsMk.jsx';
import GuideMk from './components/Mk/GuideMk/GuideMk.jsx';
import LocalMk from './components/Mk/GuideMk/LocalMk.jsx';
import OnlineMk from './components/Mk/GuideMk/OnlineMk.jsx';
import EgiftMk from './components/Mk/GuideMk/EgiftMk.jsx';
import ReferMk from './components/Mk/ReferMk/ReferMk.jsx';
import MediaBox from './components/Mk/MediaBox/MediaBox.jsx';
import OwnerMk from './components/Mk/OwnerMk/OwnerMk.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Choice />,
      },
      {
        path: '/usa',
        element: <Home />
      },
      {
        path: '/usa/opportunity',
        element: <Business />
      },
      {
        path: '/usa/owner',
        element: <Owner />
      },
      {
        path: '/usa/how-to',
        element: <Guide />
      },
      {
        path: '/usa/online-shop',
        element: <Online />
      },
      {
        path: '/usa/egift-card',
        element: <Egift />
      },
      {
        path: '/usa/local-shop',
        element: <Local />
      },
      {
        path: '/usa/benefits',
        element: <Benefits />
      },
      {
        path: '/usa/refer',
        element: <Refer/>
      },
      {
        path: '/mk',
        element: <HomeMk />
      },
      {
        path: '/mk/opportunity',
        element: <BusinessMk />
      },
      {
        path: '/mk/how-to',
        element: <GuideMk />
      },
      {
        path: '/mk/online-shop',
        element: <OnlineMk />
      },
      {
        path: '/mk/egift-card',
        element: <EgiftMk />
      },
      {
        path: '/mk/local-shop',
        element: <LocalMk />
      },
      {
        path: '/mk/benefits',
        element: <BenefitsMk />
      },
      {
        path: '/mk/refer',
        element: <ReferMk />
      },
      {
        path: '/mk/media-box',
        element: <MediaBox />
      },
      {
        path: '/mk/owner',
        element: <OwnerMk />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)