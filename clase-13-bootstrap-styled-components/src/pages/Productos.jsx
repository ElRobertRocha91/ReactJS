import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { useProducts } from "../context/ProductsContext";
import Carrito from "./Carrito";
import styles from "../styles/pages/Productos.module.css";

function Productos() {
    const { productos, cargando, error } = useProducts();
    const navigate = useNavigate();
    // Contexto del carrito
    const { agregarAlCarrito } = useCartContext();
    // Contexto para Admin
    const { esAdmin } = useAuthContext();

    const manejarEliminar = (producto) => {
        // Navegar a la página de confirmación de eliminación
        navigate('/eliminar-producto', { state: { producto } });
    };

    const manejarEditar = (producto) => {
        // Navegar al formulario de edición
        navigate('/formulario-producto', { state: { producto } });
    };

    if (cargando) {
        return <p>Cargando productos...</p>
    }
    if (error) {
        return <p>{error}</p>
    }

    return (
        <main>
            <h1>Lista de Productos</h1>
            <br />
            <ul className={styles.list}>
                {productos.map((producto) => (
                    <li key={producto.id} className={styles.item}>
                        <img src={producto.avatar} alt={producto.nombre} width="250" height="250" />
                        <br />
                        Nombre: {producto.nombre}
                        <br />
                        Precio: ${producto.precio}
                        <br />
                        <Link to={`/productos/${producto.categoria || "sin-categoria"}/${producto.id}`} state={{ producto }}>Más detalle</Link>
                        <br />
                        <br />
                        <button onClick={() => agregarAlCarrito(producto)}>Comprar</button>
                        {/* Botón Editar - SOLO visible para el admin */}
                        {/* Operador Booleano */}
                        {esAdmin && (
                            <div>
                                <button onClick={() => manejarEditar(producto)}>
                                    Editar
                                </button>
                                <button onClick={() => manejarEliminar(producto)}>
                                    Eliminar
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <Carrito />
        </main>
    )
}

export default Productos;