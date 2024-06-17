import React from 'react'

import './index.css'

import ReactDOM from 'react-dom/client'
import Root from '@/routes/root.tsx';
import Selection from './routes/selection';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ExamPart from './routes/exam-part';
import ExamAllParts from './routes/all-exam-parts';

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  children: [
    {
      path: "",
      element: <Selection />,
    },
    {
      path: "zkouska/:section",
      element: <ExamPart />,
    },
    {
      path: "zkouska",
      element: <ExamAllParts />,
    },
  ],
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
