import { lazy } from "react";
const Home = lazy(() => import("@/pages/Public/Home/Home"));

export const publicRoutes = [
  {
    label: "Home",
    index: true,
    path: "/",
    element: <Home />,
  },

];
