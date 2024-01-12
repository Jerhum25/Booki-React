import Filtre from '../Filtre/Filtre';
import './filtres.scss'

import React from 'react';

function Filtres(props) {
    return (
        <div className='containerFiltres'>
            <h3 className="titre">Filtres</h3>
            <div className="filtres">
                <Filtre src="./images/logo/economique.png" titreFiltre="économique"/>
                <Filtre src="./images/logo/familial.png" titreFiltre="familial"/>
                <Filtre src="./images/logo/romantique.png" titreFiltre="romantique"/>
                <Filtre src="./images/logo/animaux.png" titreFiltre="animaux autorisés"/>
            </div>
        </div>
    );
}

export default Filtres;