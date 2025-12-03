import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { useProducts } from "../context/ProductsContext";
import { useEffect } from "react";
// import Carrito from "./Carrito";
import styles from "../styles/pages/Productos.module.css";

function Productos() {
    const { productos, cargando, error } = useProducts();
    const navigate = useNavigate();
    // Contexto del carrito
    const { agregarAlCarrito } = useCartContext();
    // Contexto para Admin
    const { esAdmin } = useAuthContext();

    // Helmet con SEO nativo
    useEffect(() => {
        document.title = "Tienda E-Commerce | Productos";

        // Función para actualizar meta tags
        const updateMetaTag = (name, content, attribute = 'name') => {
            let meta = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!meta) {
                meta = document.createElement('meta');
                meta.setAttribute(attribute, name);
                document.head.appendChild(meta);
            }
            meta.content = content;
        };

        // Meta tags básicos
        updateMetaTag('description', 'Explora el catálogo de juegos de mesa. Encuentra juegos históricos, clásicos, modernos y educativos.');
        updateMetaTag('keywords', 'juegos de mesa, juegos históricos, juegos clásicos, juegos modernos, juegos educativos');
        updateMetaTag('author', '@webmaster');
        updateMetaTag('robots', 'index, follow');

        // Open Graph
        updateMetaTag('og:title', 'Tienda de Juegos de Mesa', 'property');
        updateMetaTag('og:description', 'Explora el catálogo de juegos de mesa.', 'property');
        updateMetaTag('og:type', 'website', 'property');
        updateMetaTag('og:image', 'https://tudominio.com/logo.jpg', 'property');
        updateMetaTag('og:url', window.location.href, 'property');

    }, []);

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
            {/* <Carrito /> */}
        </main>
    )
}

export default Productos;