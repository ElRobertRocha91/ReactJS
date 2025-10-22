import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <br />
            <h2>Tienda Online</h2>
            <br />
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to='/iniciar-sesion'>Iniciar Sesión</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;