import React from "react";

function Formulaire() {
  return (
    <div className="formulaire">
      <h3 className="titleContact">Contact</h3>
      <form className="contact">
        <label>
          Prénom
          <input type="text" name="Prenom :" placeholder="Votre prénom" />
        </label>
        <label>
          Nom
          <input type="text" name="Nom :" placeholder="Votre nom" />
        </label>
        <label>
          Email
          <input type="text" name="Email :" placeholder="Votre email" />
        </label>
        <label>
          Message
          <textarea type="text" name="Message :" placeholder="Votre Message" />
        </label>
        <button type="submit" className="envoyer">
          Envoyer
        </button>
      </form>
    </div>
  );
}
export default Formulaire;
