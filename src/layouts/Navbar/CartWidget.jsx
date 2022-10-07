import React from 'react';
import iconCarrrito from './img/bienes.png';
import './css/icon.css';

const CartWidget = () => {
    return (
        <>
            <img className='iconoCarrito' src={iconCarrrito} alt="img"></img>
        </>
    );
}

export default CartWidget;
