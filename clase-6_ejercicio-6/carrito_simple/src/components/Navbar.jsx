import { Link } from "react-router-dom";
import styles from "../styles/components/Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h2>Tienda Online</h2>
            <ul className={styles.nav}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;