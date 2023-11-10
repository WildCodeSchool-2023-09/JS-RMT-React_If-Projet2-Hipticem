import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarActualité">
        <button type="button" className="buttonNavbar">
          Actualité
        </button>
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
