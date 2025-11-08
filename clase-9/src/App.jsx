import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import IniciarSesion from './pages/IniciarSesion'
import RutaProtegida from './pages/RutaProtegida'
import Pagar from './pages/Pagar'
import Dashboard from './pages/Dashboard'
import FormProductos from './components/FormProductos'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/servicios' element={<Servicios />} />
              <Route path='/productos' element={<Productos />} />
              <Route path='/productos/:id' element={<DetalleProducto />} />
              <Route path='/productos/:categoria/:id' element={<DetalleProducto />} />
              {/* Ruta protegida - Solo Usuarios */}
              <Route path='/iniciar-sesion' element={<IniciarSesion />} />
              <Route path='/pagar' element={
                <RutaProtegida>
                  <Pagar />
                </RutaProtegida>
              } />
              {/* Ruta protegia - Solo Admin */}
              <Route path='/dashboard' element={
                <RutaProtegida soloAdmin={true}>
                  <Dashboard />
                </RutaProtegida>
              } />
              <Route path='/agregar-productos' element={
                <RutaProtegida soloAdmin={true}>
                  <FormProductos />
                </RutaProtegida>
              } />
              {/* -------------------------- */}
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/contacto' element={<Contacto />} />
            </Routes>
            <Footer />
          </>
        </CartProvider>
      </AuthProvider>
    </div>
  )
}

export default App
