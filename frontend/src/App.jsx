import { useLoaderData } from "react-router-dom";
import "./App.css";
import Carte from "./components/Carte";
import Navbar from "./components/Navbar";
import Formulaire from "./components/Formulaire";
import Footer from "./components/footer";

function App() {
  const { items } = useLoaderData();
  return (
    <div className="App">
      <h1 className="title">Time News</h1>
      <Navbar />

      <div className="containerNews">
        {items.map((news) => (
          <Carte key={news.id} news={news} />
        ))}
      </div>
      <div>
        <Formulaire />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
