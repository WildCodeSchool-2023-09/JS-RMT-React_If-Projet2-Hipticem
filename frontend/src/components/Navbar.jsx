import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Actualité from "./Actualité";

function Navbar() {
  const { authors } = useLoaderData();

  const navigate = useNavigate();

  const updateAuthor = (value) => {
    navigate(`?author=${value}`);
  };

  return (
    <div className="navbar">
      <div className="authors">
        <select name="" id="" onChange={(e) => updateAuthor(e.target.value)}>
          <option value="tous">tous</option>
          {authors.map((aut) => {
            return (
              <option key={aut.author} value={aut.author}>
                {aut.author}
              </option>
            );
          })}
        </select>
      </div>

      <div className="navbarActualité">
        <Actualité />
        <button type="button" className="buttonNavbar">
          Archive
        </button>
        <button type="button" className="buttonNavbar">
          Recherche
        </button>
      </div>
      <div className="navbarContact">
        <button type="button" className="buttonNavbar">
          contact
        </button>
        <button type="button" className="buttonNavbar">
          Panier
        </button>
      </div>
    </div>
  );
}

export default Navbar;
