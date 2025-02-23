import React from "react";

import "./index.css";

import ReactDOM from "react-dom/client";
import Root from "@/pages/layout";
import LandingPage from "./pages";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { CreditPage } from "./pages/credit/[sectionUUID]";
import { CreditAllPage } from "./pages/credit";
import { AboutPage } from "./pages/about";
import { ExamPage } from "./pages/exam/[section]";
import { ExamAllPage } from "./pages/exam";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "exam/:sectionUUID",
          element: <ExamPage />,
        },
        {
          path: "exam",
          element: <ExamAllPage />,
        },
        {
          path: "credit/:sectionUUID",
          element: <CreditPage />,
        },
        {
          path: "credit",
          element: <CreditAllPage />,
        },
      ],
    },
  ],
  { basename: "/" },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
