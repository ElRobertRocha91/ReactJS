import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import Carrito from "./Carrito";
import styles from "../styles/pages/Productos.module.css";

function Productos() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Contexto del carrito
    const { agregarAlCarrito } = useCartContext();
    // Contexto para Admin
    const { usuario } = useAuthContext();

    const esAdmin = usuario?.nombre === "admin";

    useEffect(() => {
        fetch('https://68ed704ddf2025af780033c1.mockapi.io/api/productos')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setProductos(datos);
                setCargando(false);
            })
            .catch((error) => {
                console.log('Error: ', error);
                setError('Hubo un problema al cargar los productos.');
                setCargando(false);
            });
    }, []);

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
                        {/* Descripción: {producto.descripcion} */}
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
                                <button onClick={() => navigate("/editar-producto", { state: { producto: producto } })}>
                                    Editar
                                </button>
                                <button onClick={() => navigate("/eliminar-producto", { state: { producto: producto } })}>
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