import './info.scss'

import React from 'react';

function Info(props) {
    return (
        <div className='containerInfo'>
            <img src="./images/logo/info.png" alt="icone info" />
            <p>Plus de 300 logements sont disponibles dans cette ville</p>
        </div>
    );
}

export default Info;