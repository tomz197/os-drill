import React from 'react'

import './index.css'

import ReactDOM from 'react-dom/client'
import Root from '@/routes/root.tsx';
import Selection from './routes/selection';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Part from './routes/part';
import AllParts from './routes/all-parts';

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  children: [
    {
      path: "",
      element: <Selection />,
    },
    {
      path: "drill/:section",
      element: <Part />,
    },
    {
      path: "drills",
      element: <AllParts />,
    },
  ],
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
