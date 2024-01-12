import "./searchBar.scss";

import React from "react";

function SearchBar(props) {
  return (
    <div className="containerSearchBar">
      <div className="logoLocalisation">
        <img src="./images/logo/map.png" alt="" />
      </div>
      <input type="text" placeholder="Marseille, France" />
      <button>Rechercher</button>
    </div>
  );
}

export default SearchBar;
