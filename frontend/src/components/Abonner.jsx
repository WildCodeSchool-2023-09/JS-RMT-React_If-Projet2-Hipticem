import React from "react";

function Abonner() {
  return (
    <div>
      <form>
        <label className="labelEmail">
          Email
          <input
            type="text"
            name="Email"
            placeholder="Votre email"
            className="inputEmail"
          />
        </label>
      </form>
    </div>
  );
}

export default Abonner;
