import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailcontainer from './ItemDetailcontainer';

const Item = () => {

    const [postre, setPostre] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('../json/postres.json')
            .then(response => response.json())
            .then(postres => {
                const postre1 = postres.find(postreArray => postreArray.id == id)
                setPostre(postre1)
            })
    }, []);
    return (
        <>
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <ItemDetailcontainer postre={postre}/>
                </div>
            </div>
        </>
    );
}

export default Item;
