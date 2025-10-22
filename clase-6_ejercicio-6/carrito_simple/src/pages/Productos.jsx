import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carrito from "./Carrito";
import styles from "../styles/pages/Productos.module.css";

function Productos() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [carrito, setCarrito] = useState([]);

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

    // Logica para agregar al productos al carrito de compras
    const agregarAlCarrito = (producto) => {
        setCarrito([
            ...carrito,
            producto
        ]);
        alert(`Producto ${producto.nombre} agregado al carrito.`);
    }

    if (cargando) {
        return <p>Cargando productos...</p>
    }
    if (error) {
        return <p>{error}</p>
    }

    return (
        <main>
            <section id="Productos">
                <h1>Lista de Productos</h1>
                <br />
                <ul className={styles.lista}>
                    {productos.map((producto) => (
                        <li key={producto.id} className={styles.item}>
                            Nombre: {producto.nombre}
                            <br />
                            Descripción: {producto.descripcion}
                            <br />
                            Precio: ${producto.precio}
                            <br />
                            <img src={producto.avatar} alt={producto.nombre} width="100" />
                            <br />
                            <Link to={`/productos/${producto.id}`} state={{ producto }}>Más detalle</Link>
                            <br />
                            <button onClick={() => agregarAlCarrito(producto)}>Comprar</button>
                        </li>
                    ))}
                </ul>
            </section>
            <section id="carrito">
                <Carrito carrito={carrito} setCarrito={setCarrito} />
            </section>
        </main>
    )
}

export default Productos;