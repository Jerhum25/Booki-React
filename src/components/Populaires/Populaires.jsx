import React from "react";
import Populaire from "../Populaire/Populaire";
import "./populaires.scss";
import bd from "../../data/bdPopulaires.json"

function Populaires() {
  return (
    <div className="containerPopulaires">
      <h3>Les plus populaires <img src="./images/logo/popu.png" alt="" /></h3>
      <div className="populaires">
        {bd.map((populaire, index) => (
          <Populaire
            key={index}
            src={populaire.src}
            titre={populaire.titre}
            prix={populaire.prix}
            notation={populaire.notation}
          />
        ))}
      </div>
    </div>
  );
}

export default Populaires;
