import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css'

function App() {
// Compilación de componentes nos permite modularizar el código y mejorar su mantenibilidad.

  return (
    <div>
      <h1>Clase 3 - ReactJS</h1>
      <Header />
      <Nav />
      <Main />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
