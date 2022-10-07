import { Link, useParams, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import icono4 from "./Navbar/img/usuario.png";
import pastel from './Navbar/img/pastel.png';
import galleta from './Navbar/img/galleta.png';
import postre from './Navbar/img/postre.png';
import recetas from './Navbar/img/recetas.png';
import { postresBDD } from "../utils/funcionpostres";


const Dropdow = ({ lista }) => {
    const [dropCategory, setDropCategory] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        postresBDD('../json/postres.json').then(postres => {
            const categoryIds = new Set();
            for (let index in postres) {
                categoryIds.add(postres[index].categoryId)
            }

            const postresCategoria = Array.from(categoryIds).sort()

            console.log(postresCategoria)


            const menuCategories = postresCategoria.map(categoryId =>

                <div className="col-md-4 col-sm-6 col dropdown-item" key={categoryId}>

                    <Link className="link" to={"category/" + categoryId} target="_parent">
                        <img src={postre} className="iconoDropdown" alt="postre"></img>
                        {lista[categoryId - 1]}
                    </Link>

                </div>)

            setDropCategory(menuCategories)

        })

    }, []);



    return (
        <>
            <img src={icono4} className="iconoMenu" alt="iconoMenu"></img>
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
            <div className="dropdown-menu">
                {dropCategory}
            </div>

        </>
    );
}

export default Dropdow;
