import React from 'react';
import {Link} from 'react-router-dom';
import icon from './img/icon.png';
import './css/icon.css'

const Icon = () => {
    return (
        <>
            <Link  to="/"><img src={icon} className="space_icon_nav" alt='iconDulce'></img></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </>
    );
}

export default Icon;
