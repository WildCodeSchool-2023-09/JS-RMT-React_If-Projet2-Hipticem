import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ArticlePage from "./pages/ArticlePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      const items = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/articles`)
        .then((res) => res.data);
      return items;
    },
  },
  {
    path: "/article/:articleId",
    element: <ArticlePage />,
    loader: async ({ params }) => {
      // Récupération de l'article spécifique
      const article = await axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/api/article/${params.articleId}`
        )
        .then((res) => res.data);
      return article;
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
