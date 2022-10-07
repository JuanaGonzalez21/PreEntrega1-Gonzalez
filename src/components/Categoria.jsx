import React, { useState , useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { postresBDD } from '../utils/funcionpostres';

const Categoria = () => {

    const [postres, setPostres] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        postresBDD('../json/postres.json').then(postres => {
            const postresCategoria = postres.filter(postres => postres.categoryId === parseInt(id))
            console.log(id )
            
            const cardPostre = postresCategoria.map(postre =>
       
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
    
            setPostres(cardPostre) 

        })

    }, []);
    return (
        <>
        <div className='row'>
            {postres}
        </div>
            
        </>
    );
}

export default Categoria;

