import React from 'react';
import icon from './img/icon.png';
import './css/icon.css'

const Icon = () => {
    return (
        <>
            <a href='#'><img src={icon} className="space_icon_nav"></img></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </>
    );
}

export default Icon;
