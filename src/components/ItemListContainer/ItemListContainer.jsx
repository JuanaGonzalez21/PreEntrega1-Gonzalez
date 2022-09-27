import React from 'react';
import CardBody from './CardBody';
import CardImg from './CardImg';
import './css/ItemListContainer.css';
import Card from './Card';


class producto {
    constructor(nombre, descripcion, img, precio, stock) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.img = img
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new producto("Postre de Nata", "Es un postre hecho hirviendo leche varias veces y quitando las natas o crema que se forma cada vez que hierve", "https://cdn5.recetasdeescandalo.com/wp-content/uploads/2018/10/Panacota-o-panna-cotta-receta-del-clasico-postre-italiano-de-nata.jpg");
const producto2 = new producto("Flan de queso", "Flan de Queso Crema y Cubierta de Caramelo Este suave flan está elaborado con queso crema, cubierto con una capa de caramelo.", "https://www.goya.com/media/3646/flan-de-queso-caramel-topped-cream-cheese-custard.jpg?quality=80");
const producto3 = new producto("Lemon Pie", "La tarta de limón es una tarta formada por una base de masa quebrada u hojaldre que se rellena con crema de limón.", "https://www.pequerecetas.com/wp-content/uploads/2021/07/lemon-pie-receta-tarta-de-limon-y-merengue.jpg");
const producto4 = new producto("Costrada de Alcalá", "La costrada de Alcalá es un postre tradicional de Alcalá de Henares. Se compone de varias capas de hojaldre, crema pastelera, merengue y almendra.", "https://i.ytimg.com/vi/u_CeUJJChuA/sddefault.jpg");
const producto5 = new producto("Crepes de dulce", "Las crepas o crepes son una receta de origen francés que se elaboran a partir una masa semi-líquida hecha con harina de trigo y demás ingredientes.", "https://www.titicupon.com/sites/default/files/imagecache/coupon-slider-responsive/koffi_ajust_1_10.jpg");
const producto6 = new producto("Pan de Cádiz", "La tarta de limón es una tarta formada por una base de masa quebrada u hojaldre que se rellena con crema de limón.", "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/e38a661d-5dbf-4777-b397-e4f65c44aa7e/Derivates/8f5426e7-602d-4064-b344-4f05827118da.jpg");


const productos = [producto1, producto2, producto3, producto4, producto5, producto6];
const ItemListContainer = ({greeting}) => {
    return (
        <>
            <h2 className="titulo_dos">{greeting}</h2>
            <div className="container mt-2">
                <div className="row ">
                    <Card nombres={productos[0]}/>
                    <Card nombres={productos[1]}/>
                    <Card nombres={productos[2]}/>
                    <Card nombres={productos[3]}/>
                    <Card nombres={productos[4]}/>
                    <Card nombres={productos[5]}/>
                </div>
            </div>
            
        </>
    );
}

export default ItemListContainer;
