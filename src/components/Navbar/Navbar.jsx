import React from 'react'; 
import './css/Navbar.css'
import Icon from './Icon';
import Menu from './Menu';
import Form from './Form';
import CartWidget from './CartWidget';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg colorNavbar">
                <div className="container-fluid">
                    <Icon />
                    <div className="collapse navbar-collapse menu_escondido" id="navbarSupportedContent">
                        <Menu />
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
