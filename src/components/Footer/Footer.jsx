import "./footer.scss";
import React from "react";

function Footer(props) {
  return (
    <div className="containerFooter">
      <div>
        <h3>A propos</h3>
        <ul>
          <li>
            <a href="#p">Fonctionnement du site</a>
          </li>
          <li>
            <a href="#p">Conditions générales de vente</a>
          </li>
          <li>
            <a href="#p">Données et confidentialité</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Nos hébergements</h3>
        <ul>
          <li>
            <a href="#p">Charte qualité</a>
          </li>
          <li>
            <a href="#p">Soumettre votre hôtel</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Assistance</h3>
        <ul>
          <li>
            <a href="#p">Centre d'aide</a>
          </li>
          <li>
            <a href="#p">Nous contacter</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
