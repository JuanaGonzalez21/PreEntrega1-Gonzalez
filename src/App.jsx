import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

export default function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <ItemListContainer greeting="Selecciona una opción"/>
    </>
  )
}
