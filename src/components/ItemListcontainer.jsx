import React, { useState, useEffect } from 'react';
import { postresBDD } from '../utils/funcionpostres';
import '../styles/ItemListContainer.css'
import { Link } from 'react-router-dom';

const ItemListcontainer = () => {

    const [postre, setPostre] = useState([]);
    
    useEffect(() => {
        postresBDD().then(postres =>{

            const cardPostre = postres.map(postre =>
       
                <div className="col-md-4 col-sm-6 col" key={postre.id}>
                    <div className="card card-block">
                        <img src={postre.img} className="tamañoImaCart" alt={postre.nombre} />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                        </a>
                        <h5 className="card-title font-weight-bold"><a>{postre.nombre}</a></h5>
                        <p className="card-text">
                            {postre.descripcion}
                        </p>
                        <hr />
                        
                        <Link className='btn btn-secondary buttonCard' to={"item/" + postre.id}>Ver más</Link>
                        
                    </div>
                </div>)
    
            setPostre(cardPostre) 
        })
    }, []);
    return (
        <>
        <h2 className='titulo_dos'>Selecciona tu postre</h2>
            <div className="container mt-2">
                <div className="row">
                    {postre}
                </div>
            </div>
        </>
    );
}

export default ItemListcontainer;
