import React from 'react';
import iconCarrrito from './img/bienes.png';
import './css/icon.css';

const CartWidget = () => {
    return (
        <>
            <img className='iconoCarrito' src={iconCarrrito}></img>
            <p className='parrafo'>+1</p>
        </>
    );
}

export default CartWidget;
