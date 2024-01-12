import "./populaire.scss";

import React from "react";

function Populaire({ src, prix, titre, notation }) {
  return (
    <div className="containerPopulaire">
      <img className="photo" src={src} alt="hébergement" />
      <div className="infos">
        <h4>{titre}</h4>
        <p>
          Nuit à partir de <span>{prix}</span>
        </p>
        <img className="notation" src={notation} alt="notation" />
      </div>
    </div>
  );
}

export default Populaire;
