import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

function IniciarSesion() {
  const navigate = useNavigate();
  const ubicacion = useLocation();

  // Usamos los valores del que estan en nuestro contexto global
  const { setIsAuthenticated, setUsuario } = useAppContext();
 
  const [formulario, setFormulario] = useState({ nombre: '', email: '' });


  const manejarEnvio = (e) => {
    e.preventDefault();
    if (formulario.nombre && formulario.email) {
      setIsAuthenticated(true);
      setUsuario(formulario);
     
      // Si venía del carrito, redirige a pagar
      if (ubicacion.state?.carrito) {
        navigate('/pagar', { state: { carrito: ubicacion.state.carrito } });
      } else {
        navigate('/productos');
      }
    } else {
      alert('Completa todos los datos');
    }
  };

  return (
    <div>
      <h1>Inicia sesión para continuar</h1>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={formulario.nombre}
          onChange={(e) => setFormulario({...formulario, nombre: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formulario.email}
          onChange={(e) => setFormulario({...formulario, email: e.target.value})}
          required
        />
        <button type="submit">Iniciar Sesión</button>
        <strong> </strong>
        <button type="button" onClick={() => navigate('/productos')}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default IniciarSesion;