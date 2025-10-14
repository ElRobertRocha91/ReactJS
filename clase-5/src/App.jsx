import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Montaje from './Montaje'
import Actualización from './Actualización'
import Desmontaje from './Desmontaje'
import Temporizador from './Temporizador'
import Productos from './MockApi'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Clase 5 - useEffect + API</h1>
      <br />
      <h3>Ejemplo useEffect</h3>
      <Montaje />
      <h3>Actualización</h3>
      <Actualización />
      <h3>Desmontaje</h3>
      <Desmontaje />  
      <h3>Ejemplo de useEffect con setInterval</h3>
      <Temporizador />
      <h3>Ejemplo de useEffect con API</h3>
      <Productos />
    </>
  )
}

export default App
