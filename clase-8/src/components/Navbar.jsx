import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import styles from "../styles/components/Navbar.module.css";

function Navbar() {
    const { isAuthenticated, usuario, carrito, cerrarSesion } = useAppContext();

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
                <li>
                    {
                        isAuthenticated ? (
                            <div className={styles.user}>
                                <div className={styles.usuario}>
                                    <span>Hola, {usuario.nombre}</span>
                                    <span>Carrito: ({carrito.length})</span>
                                </div>
                                <button onClick={cerrarSesion} className={styles.session}>Cerrar Sesión</button>
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