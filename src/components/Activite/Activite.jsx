import './activite.scss'
import React from 'react';

function Activite({src, titre}) {
    return (
        <div className='containerActivite'>
            <img src={src} alt={titre} />
            <p>{titre}</p>
        </div>
    );
}

export default Activite;