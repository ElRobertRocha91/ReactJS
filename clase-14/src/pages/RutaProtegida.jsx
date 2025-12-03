import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

function RutaProtegida({ children, soloAdmin = false }) {
  const { usuario, cargando } = useAuthContext();
  const location = useLocation();

  if (cargando) { 
  // Aqui nos aseguramos de que con este estado de carga, 
  // que primero carga desde el localStorage, antes de establecer el undefined en el token
    return <div>Cargando...</div>
  }

  if (!usuario) {
    // Pasa el state actual, que contiene al carrito a /login
    return <Navigate to="/iniciar-sesion" state={location.state} replace />;
  }

  if (soloAdmin && usuario.nombre !== "admin") {
    return <Navigate to="/productos" replace />;
  }

  return children;
}

export default RutaProtegida;