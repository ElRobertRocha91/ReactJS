import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import styles from "../styles/pages/Dashboard.module.css";

function Dashboard() {
    const { usuario, cerrarSesion } = useAuthContext();

    // Obtengo el token actual
    const tokenActual = localStorage.getItem("authToken");

    return (
        <main>
            <div className={styles.dashboard}>
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
                        <div className={styles.acciones}>
                            <div className={styles.link}>
                                <Link to="/agregar-producto" className={styles.verde}>Agregar nuevo producto</Link>
                            </div>
                            <div className={styles.link}>
                                <Link to="/productos" className={styles.celeste}>Ver todos los productos</Link>
                            </div>
                        </div>
                    </div>
                    <hr />

                    {/* Botón cerrar sesión */}
                    <button onClick={cerrarSesion} className={styles.rojo}>Cerrar sesión</button>
                </div>
            </div>
        </main>
    )
}

export default Dashboard; 