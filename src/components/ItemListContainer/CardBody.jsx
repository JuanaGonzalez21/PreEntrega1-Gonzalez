import React from 'react';
import CardImg from './CardImg';

const CardBody = ({ nombres }) => {
    return (
        <>
                <CardImg nombres={nombres}/>
                <h5 className="card-title font-weight-bold"><a>{nombres.nombre}</a></h5>
                <p className="card-text">
                    {nombres.descripcion}
                </p>
                <hr/>
                <button type="button" class="btn btn-secondary buttonCard">Añadir al Carrito</button>
        </>
    );
}

export default CardBody;
