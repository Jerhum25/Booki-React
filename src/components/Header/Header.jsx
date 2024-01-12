import "./header.scss";

import React from "react";

function Header(props) {
  return (
    <div className="containerHeader">
      <img src="./images/logo/booki.png" alt="logo booki" className="logo" />
      <nav>
        <ul>
          <li>
            <a href="#hebergements">hébergements</a>
          </li>
          <li>
            <a href="#activites">activités</a>
          </li>
        </ul>
      </nav>
      <hr/>
    </div>
  );
}

export default Header;
