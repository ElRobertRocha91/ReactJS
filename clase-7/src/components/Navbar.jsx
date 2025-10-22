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
            </ul>
        </nav>
    )
}

export default Navbar;