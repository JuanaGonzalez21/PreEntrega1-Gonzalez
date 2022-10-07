import {Link} from 'react-router-dom';
import React from 'react';
import './css/Menu.css'
import Dropdow from '../Dropdow';
import icono1 from "./img/menu.png";
import icono2 from "./img/lapiz.png";
import icono3 from "./img/ubicacion.png";


const Menu = () => {
    const listDrowdon = ["Postres", "Galletas", "Pasteles", "Recetas"]
    
    return (
        <>
            <ul className="centrado me-auto mb-2 mb-lg-0">
                <li className="nav-item"><img src={icono1} className="iconoMenu" alt='Menu'></img>
                    <Link className="nav-link active" to="/">Menú</Link>
                </li>
                <li className="nav-item">
                <img src={icono2} className= "iconoMenu" alt='Menu'></img>
                <Link className="nav-link active" to="/about">Nosotros</Link>
                </li>
                <li className="nav-item">
                    <img src={icono3} className= "iconoMenu" alt='Menu'></img>
                    <Link className="nav-link active" to="/contacto ">Contacto</Link>
                </li>
                <li className="nav-item dropdown">
                    <Dropdow lista={listDrowdon}/>
                </li>
            </ul>
        </>
    );
}

export default Menu;
