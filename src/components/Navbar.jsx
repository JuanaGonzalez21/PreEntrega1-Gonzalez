import React from 'react';
import {Link} from 'react-router-dom';
import '../layouts/Navbar/css/Navbar.css';
import Icon from '../layouts/Navbar/Icon'
import Menu from '../layouts/Navbar/Menu';
import iconCarrrito from '../layouts/Navbar/img/bienes.png';
//import CartWidget from '../layouts/Navbar/CartWidget'
//import Carrito  from './Carrito';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg colorNavbar">
                <div className="container-fluid">
                    <Icon />
                    <div className="collapse navbar-collapse menu_escondido" id="navbarSupportedContent">
                        <Menu />
                    </div> 
                    <Link className="nav-link itemsCarrito" to="/carrito"><img className='iconoCarrito' src={iconCarrrito} alt="img"></img></Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
