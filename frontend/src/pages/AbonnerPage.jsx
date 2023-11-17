import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

function AbonnerPage() {
  // setAbonnement(true);
  return (
    <div className="containerAbonner">
      <div>
        <h2 className="titleAbonner">Time News</h2>
      </div>
      <div className="navbarAbonner"> </div>
      <div className="email">
        <label className="labelEmail">
          Email
          <input
            type="text"
            name="Email"
            placeholder="Votre email"
            className="inputEmail"
          />
        </label>

        <button type="submit" className="buttonAbonner">
          S'abonner
        </button>
        <Link to="/" className="buttonAbonner">
          Retour
        </Link>
      </div>
      <div className="footerAbonner">
        <Footer />
      </div>
    </div>
  );
}

export default AbonnerPage;
