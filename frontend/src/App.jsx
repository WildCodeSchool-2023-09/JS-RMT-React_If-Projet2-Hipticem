import { useLoaderData } from "react-router-dom";

import "./App.css";

function App() {
  const items = useLoaderData();

  return (
    <div className="App">
      {items.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
}

export default App;
