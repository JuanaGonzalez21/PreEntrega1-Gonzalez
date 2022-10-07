import React from 'react';

const ItemDetailcontainer = ({postre}) => {
    
    return (
        <>
            <div className="col-md-4">
                        <img src={postre.img} className="img-fluid rounded-start" alt={postre.nombre} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{postre.nombre}</h5>
                            <p className="card-text">Descripcion: {postre.descripcion}</p>
                            <p className="card-text">Precio: {postre.precio}</p>
                            <button className='btn btn-dark'>Comprar</button>
                        </div>
                    </div>
        </>
    );
}

export default ItemDetailcontainer;
