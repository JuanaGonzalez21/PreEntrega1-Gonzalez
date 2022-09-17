import React from 'react';
import icono4 from "./img/usuario.png";
import pastel from './img/pastel.png';
import galleta from './img/galleta.png';
import postre from './img/postre.png';
import recetas from './img/recetas.png';

const Dropdow = ({ lista }) => {
    return (
        <>
            <img src={icono4} className="iconoMenu"></img>
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
            <div className="dropdown-menu ">
                <a className="dropdown-item" href="#"><img src={postre} className="iconoDropdown"></img>{lista[0]}</a>
                <a className="dropdown-item" href="#"><img src={galleta} className="iconoDropdown"></img>{lista[1]}</a>
                <a className="dropdown-item" href="#"><img src={pastel} className="iconoDropdown"></img>{lista[2]}</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#"><img src={recetas} className="iconoDropdown"></img>{lista[3]}</a>
            </div>

        </>
    );
}

export default Dropdow;
