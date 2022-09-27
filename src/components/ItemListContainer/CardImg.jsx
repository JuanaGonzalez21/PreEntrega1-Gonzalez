import React from 'react';

const CardImg = ({nombres}) => {
    return (
        <>
            <img src={nombres.img} className="tamañoImaCart" alt={nombres.nombre} />
            <a href="#!">
                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
            </a>
        </>
    );
}

export default CardImg;
