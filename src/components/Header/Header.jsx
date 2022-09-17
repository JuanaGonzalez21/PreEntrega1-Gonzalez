import React from 'react';
import image3 from './img/restaurante3.jpg';
import './css/header.css'

const Header = () => {
    return (
        <div class="cover-container"  >
            <div class="mx-auto tamañoEspacio">
                <div class="contenedor contenedor-img">
                <img src={image3} class="img-fluid imagen_tamaño" alt="..."></img>
        
                </div>
            </div>
        </div>
    );
}

export default Header;
