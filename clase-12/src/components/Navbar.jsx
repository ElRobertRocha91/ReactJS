import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import styles from "../styles/components/Navbar.module.css";

function Navbar() {
    const { isAuthenticated, usuario, cerrarSesion } = useAuthContext();
    const { carrito, vaciarCarrito } = useCartContext();
    const navigate = useNavigate();

    // Función para solucionar el BUGS detectado en la sesión.
    // Limpia el carrito luego del cierre de sesión
    const manejarCerrarSesion = () => {
        navigate("/productos");

        // Pausa de 1" para asegurar la navegación
        setTimeout(() => {
            vaciarCarrito();
            cerrarSesion();
        }, 100);
    }

    return (
        <nav className={styles.container}>
            <div className={styles.title}>
                <h2>Tienda Online</h2>
            </div>
            <ul className={styles.menu}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                {/* Enlace para ADMIN - Solo visible para el Admin */}
                {usuario?.nombre === "admin" && (
                    <li><Link to="/agregar-producto">Agregar Producto</Link></li>
                )}
                <li>
                    {
                        isAuthenticated ? (
                            <div className={styles.user}>
                                <div className={styles.usuario}>
                                    <span>Hola, {usuario.nombre}</span>
                                    <span>Carrito: ({carrito.length})</span>
                                    {/* Enlace a el Dashboard solo para Admin */}
                                    {usuario.nombre === "admin" && (
                                        <Link to="/dashboard">Dashboard</Link>
                                    )}
                                </div>
                                <button onClick={manejarCerrarSesion} className={styles.session}>Cerrar Sesión</button>
                            </div>
                        ) : (
                            <Link to='/iniciar-sesion'>Iniciar Sesión</Link>
                        )
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;