import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import PublicImage from "./components/PublicImage";
import Image from "./components/Image";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/public",
    element: <PublicImage />,
  },
  {
    path: "/files",
    element: <Image />,
  },
]);
