import {BrowserRouter,Routes , Route} from 'react-router-dom' 
//BrowserRouter => Definir las rutas de la aplicación
//Routes => las rutas en sí
//Route => Cada una de las rutas
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
//import Header from './components/Header';
import ItemListcontainer from './components/ItemListcontainer';
import About from './components/About';
import Contacto from './components/Contacto';
import Carrito from './components/Carrito';
import Footer from './components/Footer';
import Item from './components/Item';
import Categoria from './components/Categoria'

export default function App() {
  return (
    <>
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListcontainer/>} />
          <Route path="/item/:id" element={<Item/>}/>
          <Route path="/category/:id" element={<Categoria/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/carrito" element={<Carrito/>} />
        </Routes> 
        <Footer/>
      </BrowserRouter>
    </>
  )
}



