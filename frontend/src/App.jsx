import { useLoaderData } from "react-router-dom";

import "./App.css";
import Carte from "./components/Carte";

function App() {
  const articles = useLoaderData();
  return (
    <div className="App">
      <div className="containerNews">
        {articles.map((news) => (
          <Carte key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}

export default App;
