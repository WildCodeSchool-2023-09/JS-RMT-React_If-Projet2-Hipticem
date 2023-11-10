import { Link } from "react-router-dom";

function Carte({ news }) {
  return (
    <div className="containerCarte">
      <h1 className="containerNewsTitle">{news.title}</h1>
      <Link to={`/article/${news.id}`}>
        <img
          className="containerNewsImage"
          src={news.urlToImage}
          alt={news.title}
        />
      </Link>
    </div>
  );
}

export default Carte;
