import React from 'react'; 
import './css/Navbar.css'
import Icon from './Icon';
import Menu from './Menu';
import Form from './Form';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg colorNavbar">
                <div className="container-fluid">
                    <Icon />
                    <div className="collapse navbar-collapse menu_escondido" id="navbarSupportedContent">
                        <Menu />
                        <Form />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
