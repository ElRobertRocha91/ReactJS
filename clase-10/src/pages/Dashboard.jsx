import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Dashboard() {
    const { usuario, cerrarSesion } = useAuthContext();

    // Obtengo el token actual
    const tokenActual = localStorage.getItem("authToken");

    return (
        <main>
            <div>
                <h1>Dashboard Administrativo</h1>
                <div>
                    <p>
                        <strong>Sesión iniciada como:</strong> {usuario.nombre}
                    </p>

                    {/* Sección del Token */}
                    <div>
                        <strong>Token de autenticación</strong>
                        <br />
                        <code>{tokenActual}</code>
                    </div>

                    {/* Sección de acciones Admin */}
                    <div>
                        <h3>Acciones:</h3>
                        <div>
                            <Link to="/agregar-producto">Agregar nuevo producto</Link>
                            <Link to="/productos">Ver todos los productos</Link>
                        </div>
                    </div>
                    <hr />

                    {/* Botón cerrar sesión */}
                    <button onClick={cerrarSesion}>Cerrar sesión</button>
                </div>
            </div>
        </main>
    )
}

export default Dashboard; 