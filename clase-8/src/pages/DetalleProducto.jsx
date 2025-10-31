import { Link, useLocation, useParams } from "react-router-dom";

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
                <li key={producto.id}>
                    {producto.nombre}
                    <br />
                    <p><strong>Descripción: </strong>{producto.descripcion}</p>
                    <p>Precio: ${producto.precio}</p>
                    <img src={producto.avatar} alt={producto.nombre} width="80%" />
                    <br />
                    <Link to={'/productos'}>Volver</Link>
                </li>
            </section>
        </main>
    )
}

export default DetalleProducto;