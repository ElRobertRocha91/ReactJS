import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/servicios' element={<Servicios />}></Route>
        <Route path='/productos' element={<Productos />}></Route>
        <Route path='/productos/:id' element={<DetalleProducto />}></Route>
        <Route path='/nosotros' element={<Nosotros />}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
