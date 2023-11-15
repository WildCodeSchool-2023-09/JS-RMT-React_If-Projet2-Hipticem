import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ArticlePage from "./pages/ArticlePage";
// import ActualitesPage from "./pages/ArchivesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async ({ request }) => {
      const url = new URL(request.url);

      const items = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/articles${url.search}`)
        .then((res) => res.data);

      const authors = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/authors`)
        .then((res) => res.data)
        .catch((err) => console.error(err));

      const archives = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/archives`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
      return { items, authors, archives };
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
  // {
  //   path: "/article/:articleId",
  //   element: <ArchivesPage />,
  //   loader: async ({ params }) => {
  //     // Récupération de l'article spécifique
  //     const archive = await axios
  //       .get(
  //         `${import.meta.env.VITE_BACKEND_URL}/api/article/${params.articleId}`
  //       )
  //       .then((res) => res.data);

  //     return archive;
  //   },
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
