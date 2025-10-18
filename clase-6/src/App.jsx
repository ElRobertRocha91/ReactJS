import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Servicios from './pages/Servicios'
import DetalleProducto from './pages/DetalleProducto'
import './App.css'

function App() {

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
