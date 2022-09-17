import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import CartWidget from './components/CartWidget/CartWidget';

export default function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <CartWidget/>
    </>
  )
}
