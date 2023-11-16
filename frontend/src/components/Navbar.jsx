import React from "react";
import { useLoaderData, useNavigate, Link } from "react-router-dom";

import Archives from "./Archives";

function Navbar() {
  const { authors } = useLoaderData();

  const navigate = useNavigate();

  const updateAuthor = (value) => {
    navigate(`?author=${value}`);
  };

  return (
    <div id="hautDePage" className="navbar">
      <div className="navbarActualité">
        <div className="authors">
          <label htmlFor="author">Recherche par auteurs :</label>
          <select name="" id="" onChange={(e) => updateAuthor(e.target.value)}>
            <option value="tous">Tous</option>
            {authors.map((aut) => {
              return (
                <option key={aut.author} value={aut.author}>
                  {aut.author}
                </option>
              );
            })}
          </select>
          <Link to="/" className="buttonRetourNav">
            Revenir
          </Link>
        </div>

        <Archives />

        <button type="button" className="buttonNavbar">
          Recherche
        </button>
      </div>
      <div className="navbarContact">
        <a href="#idFormulaire">
          <button type="button" className="buttonNavbar">
            contact
          </button>
        </a>
        <button type="button" className="buttonNavbar">
          Panier
        </button>
      </div>
    </div>
  );
}

export default Navbar;
