function Article({ articles }) {
  return (
    <div>
      <h1>{articles.title}</h1>
      <p>{articles.description}</p>
      <p>{articles.author}</p>
      <p>{articles.publishedAt}</p>
    </div>
  );
}

export default Article;
