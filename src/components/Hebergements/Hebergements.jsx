import Hebergement from "../Hebergement/Hebergement";
import "./hebergements.scss";
import React from "react";
import bd from "../../data/bdHebergements.json";
console.log(bd);

function Hebergements(props) {
  return (
    <div className="containerHebergements" id="hebergements">
      <h3>Hébergements à Marseille</h3>
      <div className="hebergements">
        {bd.map((hebergement, index) => (
          <Hebergement
            key={index}
            src={hebergement.src}
            titre={hebergement.titre}
            prix={hebergement.prix}
            notation={hebergement.notation}
          />
        ))}
      </div>
      <p>Afficher plus...</p>
    </div>
  );
}

export default Hebergements;
