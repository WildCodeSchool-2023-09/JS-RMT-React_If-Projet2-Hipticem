function Carte({ news }) {
  return (
    <div className="containerCarte">
      <h1 className="containerNewsTitle">{news.title}</h1>
      <img
        className="containerNewsImage"
        src={news.urlToImage}
        alt={news.title}
      />
    </div>
  );
}

export default Carte;
