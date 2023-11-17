import { useState } from "react";

import emailjs from "@emailjs/browser";

function Formulaire() {
  const [sendMessage, setSendMessage] = useState("");

  const [formulaire, setFormulaire] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const inputName = e.target.name;

    const inputValue = e.target.value;

    const newFormulaireData = { ...formulaire };

    newFormulaireData[inputName] = inputValue;

    setFormulaire(newFormulaireData);
  };

  const getMessageReady = (msg) => {
    setSendMessage(msg);

    setFormulaire({
      nom: "",
      prenom: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSendMessage("");
    }, 2500);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_x6nk8jc",
        "template_r9v1yhs",
        formulaire,
        "3Cm68m6OqOF4uahyu"
      )
      .then(
        () => {
          getMessageReady("Votre formulaire a bien été envoyé");
        },
        () => {
          getMessageReady(
            "Une erreur s'est produite, veuillez ré-essayer ultérieurement"
          );
        }
      );
  };

  return (
    <div id="idFormulaire" className="formulaire">
      <h3 className="titleContact">Contact</h3>
      <p>{sendMessage}</p>
      <form className="contact" onSubmit={sendEmail}>
        <label htmlFor="name">
          Prénom
          <input
            type="text"
            name="prenom"
            placeholder="Votre prenom"
            onChange={handleChange}
            value={formulaire.prenom}
            required
          />
        </label>
        <label>
          Nom
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            onChange={handleChange}
            value={formulaire.Nom}
            required
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            placeholder="Votre email"
            onChange={handleChange}
            value={formulaire.Email}
            required
          />
        </label>
        <label>
          Message
          <textarea
            type="text"
            name="message"
            placeholder="Votre Message"
            onChange={handleChange}
            value={formulaire.Message}
            required
          />
        </label>
        <button type="submit" className="envoyer">
          Envoyer
        </button>
      </form>
    </div>
  );
}
export default Formulaire;
