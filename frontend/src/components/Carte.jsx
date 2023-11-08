import "./Carte.css";

function Carte({ news }) {
  return (
    <div>
      <h1>{news.title}</h1>
      <img src={news.urlToImage} alt={news.title} />
    </div>
  );
}

export default Carte;
