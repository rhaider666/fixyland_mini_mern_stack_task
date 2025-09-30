import { createBrowserRouter, RouterProvider } from "react-router";
import React from "react";
import { rawRoutes } from "./routes";
import Layout from "../components/Layout";

function Routes() {
  const processedRoutes = rawRoutes.map((route) => {
    if (route.layout) {
      return {
        ...route,
        element: <Layout bannerTitle={route.title}>{route.element}</Layout>,
      };
    }
    return route;
  });

  const router = createBrowserRouter(processedRoutes);
  return <RouterProvider router={router} />;
}

export default Routes;
