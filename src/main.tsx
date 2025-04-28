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
import { CreditCustomPage } from "./pages/credit-custom";
import { ExamCustomPage } from "./pages/exam-custom";
import { ThemeProvider } from "@/components/theme-provider";

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
          path: "exam-custom",
          element: <ExamCustomPage />,
        },
        {
          path: "credit/:sectionUUID",
          element: <CreditPage />,
        },
        {
          path: "credit",
          element: <CreditAllPage />,
        },
        {
          path: "credit-custom",
          element: <CreditCustomPage />,
        },
      ],
    },
  ],
  { basename: "/" },
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="os-drill-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
