import React from 'react';
import productos from './ItemListContainer';
import CardBody from './CardBody';
import CardImg from './CardImg';

const Card = ({ nombres }) => {
    return (
        <>
            <div class="col-md-4 col-sm-6 col">
                <div class="card card-block">
                    <CardBody nombres={nombres} />
                </div>
            </div>
        </>
    );
}

export default Card;
