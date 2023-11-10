import { useLoaderData, Link } from "react-router-dom";
import React from "react";

function ArticlePage() {
  const article = useLoaderData();

  return (
    <div>
      <div className="containerPageArticle">
        <Link to="/" className="buttonRetour">
          Retour
        </Link>
        <p className="publisheAtArticle">
          Date de publication : {article.publishedAt}
        </p>
        <h1 className="titleArticle">{article.title}</h1>
        <img
          className="containerNewsImage"
          src={article.urlToImage}
          alt={article.title}
        />

        <p className="descriptionArticle">{article.description}</p>
        <p className="authorArticle">{article.author}</p>
      </div>
      <Link to="/" className="buttonRetour">
        Retour
      </Link>
    </div>
  );
}

export default ArticlePage;
