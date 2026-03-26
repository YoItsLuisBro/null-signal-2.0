import { createBrowserRouter } from "react-router-dom";
import { SiteLayout } from "../components/layout/SiteLayout";
import { HomePage } from "../features/home/HomePage";
import { ProjectsPage } from "../features/projects/ProjectsPage";
import { NotFoundPage } from "../features/not-found/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
