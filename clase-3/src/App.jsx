import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import EquipoTalentoLab from './components/EquipoTalentoLab';
import TarjetaProyecto from './components/TarjetaProyecto';
import GaleriaIntereses from './components/GaleriaIntereses';
import './App.css'

function App() {
  // Compilación de componentes nos permite modularizar el código y mejorar su mantenibilidad.

  const equipo = [
    {
      nombre: 'Silvia',
      rol: 'Product Owner',
      imagen: 'https://via.placeholder.com/100'
    },
    {
      nombre: 'Luis',
      rol: 'Diseñador UX/UI',
      imagen: 'https://via.placeholder.com/100'
    },
    {
      nombre: 'Matías',
      rol: 'Desarrollador',
      imagen: 'https://via.placeholder.com/100'
    },
    {
      nombre: 'Sabrina',
      rol: 'Desarrolladora',
      imagen: 'https://via.placeholder.com/100'
    }
  ];

  const intereses = ['React', 'JavaScript', 'APIs', 'diseño UX', 'Node.js'];

  return (
    <div>
      <h1>Clase 3 - ReactJS</h1>
      <Header />
      <Nav />
      <Main />
      <Gallery />
      <h1>Ejercicio 3</h1>
      <EquipoTalentoLab lista={equipo} />
      <TarjetaProyecto
        titulo="Plataforma de Gestión"
        descripcion="Una herramienta para optimizar la gestión de equipos."
        botonTexto="Explorar proyecto"
      />
      <GaleriaIntereses intereses={intereses}/>
      <Footer />
    </div>
  )
}

export default App
