import { useState } from 'react'
import Contador from './components/Contador'
import Boton from './components/Boton'
import './App.css'
import Formulario from './components/Formulario'

function App() {

  return (
    <main>
      <h1>Clase 4 - ReactJS</h1>
      <h2>Hook useState</h2>
      <Contador />
      <p>Manejar eventos con onClick()</p>
      <Boton />
      <p>Ejemplo de formulario</p>
      <Formulario />
    </main>
  )
}

export default App
