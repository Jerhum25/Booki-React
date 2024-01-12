import "./hebergement.scss";

import React from "react";

function Hebergement({ src, titre, prix, notation }) {
  return (
    <div className="containerHebergement">
      <img className="photo" src={src} alt="hébergement" />
      <h4>{titre}</h4>
      <p>
        Nuit à partir de <span>{prix}</span>
      </p>
      <img className="notation" src={notation} alt="notation" />
    </div>
  );
}

export default Hebergement;
