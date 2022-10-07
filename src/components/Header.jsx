import React from 'react';
import image3 from '../layouts/Header/img/restaurante3.jpg';
import '../layouts/Header/css/header.css'

const Header = () => {
    return (
        <div className="cover-container"  >
            <div className="mx-auto tamañoEspacio">
                <div className="contenedor contenedor-img">
                <img src={image3} className="img-fluid imagen_tamaño" alt="..."></img>
        
                </div>
            </div>
        </div>
    );
}

export default Header;
