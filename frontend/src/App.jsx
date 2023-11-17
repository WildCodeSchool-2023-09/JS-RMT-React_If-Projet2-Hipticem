import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Carte from "./components/Carte";
import Navbar from "./components/Navbar";
import Formulaire from "./components/Formulaire";
import Footer from "./components/footer";

function App() {
  const [items, setItems] = useState([]);
  const [filterParams, setFilterParams] = useState({
    author: "tous",
    archive: "tous",
  });

  const updateFilterParams = (value, type) => {
    setFilterParams((prev) => ({ ...prev, [type]: value }));
  };

  const getQuery = () => {
    let query = "";
    if (filterParams.author !== "tous") {
      query += `?author=${filterParams.author}`;
    }

    if (filterParams.archive !== "tous") {
      query += `${query.includes("?") ? "&" : "?"}archive=${
        filterParams.archive
      }`;
    }
    return query;
  };

  useEffect(() => {
    const query = getQuery();

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/articles${query}`)
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, [filterParams]);

  return (
    <div className="App">
      <h1 className="title">Time News</h1>
      <Navbar updateFilterParams={updateFilterParams} />

      <div>
        <a href="#hautDePage">
          <button type="button" className="hautDePage">
            Haut de page
          </button>
        </a>
      </div>
      <div className="containerNews">
        {items.map((news) => (
          <Carte key={news.id} news={news} />
        ))}
      </div>

      <div className="containerForms">
        <Formulaire />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
