import { Link, useLocation, useParams } from "react-router-dom";
import styles from "../styles/pages/DetalleProducto.module.css";

function DetalleProducto() {
    const { id } = useParams();
    const location = useLocation();
    const producto = location.state?.producto;

    if (!producto) {
        return (
            <div>
                <p>No se pudo cargar el producto.</p>
                <br />
                <Link to="/productos">Volver a productos.</Link>
            </div>
        )
    }
    return (
        <main>
            <section>
                <h2>Detalle del Producto {id}</h2>
                <br />
                <div className={styles.tarjeta}>
                    <li key={producto.id}>
                        <div>
                            <h3>{producto.nombre}</h3>
                            <p><strong>Descripción: </strong>{producto.descripcion}</p>
                            <p>Precio: ${producto.precio}</p>
                        </div>
                        <div>
                            <img src={producto.avatar} alt={producto.nombre} width="350px" height="300px" />
                        </div>
                        <br />
                        <Link to={'/productos'} className={styles.volver}>Volver</Link>
                    </li>
                </div>
            </section>
        </main>
    )
}

export default DetalleProducto;