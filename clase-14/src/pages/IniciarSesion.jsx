import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import styles from '../styles/pages/IniciarSesion.module.css';

function IniciarSesion() {
  const { iniciarSesion } = useAuthContext();
  const navigate = useNavigate();
  const ubicacion = useLocation();

  // Usamos los valores del que estan en nuestro contexto global
  // const { setIsAuthenticated, setUsuario } = useAppContext();

  const [formulario, setFormulario] = useState({ nombre: '', email: '' });


  const manejarEnvio = (e) => {
    e.preventDefault();

    // Verifica credenciales (admin/1234@admin)
    if (formulario.nombre === "admin" && formulario.email === "1234@admin") {
      // Guarda el email ingresado y pasa el nombre ppara el token admin
      localStorage.setItem("authEmail", formulario.email);
      // setIsAuthenticated(true);
      // setUsuario(formulario);
      iniciarSesion("admin");
      navigate("/dashboard");
    
      // Lógica para usuarios normales - si No es admin
     } else if (formulario.nombre && formulario.email && formulario.nombre !== "admin") {
      // Guarda el email ingresado y pasa nombre para el token user
      localStorage.setItem("authEmail", formulario.email);
      iniciarSesion(formulario.nombre);

      // Si venía del carrito, redirige a pagar
      if (ubicacion.state?.carrito) {
        navigate('/pagar', { state: { carrito: ubicacion.state.carrito } });
      } else {
        navigate('/productos');
      }
    } else {
      alert('Credenciales de administrador incorrectas. Usa: admin / 1234@admin');
    }
  };

  return (
    <main>
      <h1>Inicia sesión para continuar</h1>
      <form onSubmit={manejarEnvio} className={styles.formulario}>
        <div>
        <input
          type="text"
          placeholder="Nombre completo"
          value={formulario.nombre}
          onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })}
          required
        />
        </div>
        <div>
        <input
          type="email"
          placeholder="Email"
          value={formulario.email}
          onChange={(e) => setFormulario({ ...formulario, email: e.target.value })}
          required
        />
        </div>
        <div>
        <button type="submit">Iniciar Sesión</button>
        <strong> </strong>
        <button type="button" onClick={() => navigate('/productos')}>
          Cancelar
        </button>
        </div>
      </form>
    </main>
  );
}

export default IniciarSesion;