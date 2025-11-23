import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { ProductsProvicer } from './context/ProductsContext'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import IniciarSesion from './pages/IniciarSesion'
import RutaProtegida from './pages/RutaProtegida'
import Pagar from './pages/Pagar'
import Dashboard from './pages/Dashboard'
import FormularioProducto from './components/FormularioProducto'
import EliminarProducto from './components/EliminarProducto'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <ProductsProvicer>
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
              <Route path='/formulario-producto' element={
                <RutaProtegida soloAdmin={true}>
                  <FormularioProducto />
                </RutaProtegida>
              } />
              <Route path='/eliminar-producto' element={
                <RutaProtegida soloAdmin={true}>
                  <EliminarProducto />
                </RutaProtegida>
              } />
              {/* -------------------------- */}
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/contacto' element={<Contacto />} />
              {/* Redireccionamiento por defecto */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
          </ProductsProvicer>
        </CartProvider>
      </AuthProvider>
    </div>
  )
}

export default App
