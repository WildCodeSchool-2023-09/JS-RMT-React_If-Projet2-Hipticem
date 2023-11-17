import React from "react";
import { Link } from "react-router-dom";

import Filter from "./Filter";

function Navbar({ updateFilterParams }) {
  return (
    <div id="hautDePage" className="navbar">
      <div className="navbarActualité">
        <Filter
          title="Recherche par auteurs :"
          type="author"
          props="author"
          updateFilterParams={updateFilterParams}
        />
        <Filter
          title="Toutes nos archives"
          type="archive"
          props="publishedAt"
          updateFilterParams={updateFilterParams}
        />
      </div>
      <div className="navbarContact">
        <a href="#idFormulaire">
          <button type="button" className="buttonNavbar">
            contact
          </button>
        </a>
        <Link to="/abonnement" className="buttonNavbarAbonner">
          S'abonner
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
