import React from "react";
import Activite from "../Activite/Activite";
import "./activites.scss";
import bd from "../../data/bdActivites.json";

function Activites(props) {
  return (
    <div className="containerActivites" id="activites">
      <h3>Acitvités à Marseille</h3>
      <div className="activites">
        {bd.map((activite, index) => (
          <Activite key={index} src={activite.src} titre={activite.titre} />
        ))}
      </div>
    </div>
  );
}

export default Activites;
