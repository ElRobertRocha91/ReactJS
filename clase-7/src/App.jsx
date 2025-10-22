import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos/:id' element={<DetalleProducto />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
