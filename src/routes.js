import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import PublicImage from "./components/PublicImage";
import Image from "./components/Image";
import Layout from "./components/Layout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/public",
    element: (
      <Layout>
        <PublicImage />
      </Layout>
    ),
  },
  {
    path: "/files",
    element: (
      <Layout>
        <Image />
      </Layout>
    ),
  },
]);
