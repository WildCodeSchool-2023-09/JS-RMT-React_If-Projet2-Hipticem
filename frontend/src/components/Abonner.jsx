import React from "react";

function Abonner() {
  return (
    <div>
      <form>
        <label>
          <div className="labelEmail">
            Saisis ton Email pour t'abonner à la newsletter :
          </div>

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
