import React from "react";

import "./index.css";

import ReactDOM from "react-dom/client";
import Root from "@/pages/layout";
import LandingPage from "./pages";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { CreditPage } from "./pages/credit/[sectionUUID]";
import { CreditAllPage } from "./pages/credit";
import ExamPart from "./pages/exam/[section]";
import ExamAllParts from "./pages/exam";

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
          path: "exam/:section",
          element: <ExamPart />,
        },
        {
          path: "exam",
          element: <ExamAllParts />,
        },
        {
          path: "credit",
          element: <CreditAllPage />,
        },
        {
          path: "credit/:sectionUUID",
          element: <CreditPage />,
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
