import "./filtre.scss";

import React from "react";

function Filtre({ src, titreFiltre }) {
  return (
    <div className="containerFiltre">
      <div className="icone">
        <img src={src} alt="icone filtre" />
      </div>
      <p>{titreFiltre}</p>
    </div>
  );
}

export default Filtre;
