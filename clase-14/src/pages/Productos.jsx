import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { useProducts } from "../context/ProductsContext";
import { useEffect, useState } from "react";
// import Carrito from "./Carrito";
import styles from "../styles/pages/Productos.module.css";

function Productos() {
    const { productos, cargando, error } = useProducts();
    const navigate = useNavigate();
    // Contexto del carrito
    const { agregarAlCarrito } = useCartContext();
    // Contexto para Admin
    const { esAdmin } = useAuthContext();
    // Estado para el Paginado
    const [paginaActual, setPaginaActual] = useState(1);
    // Estado para el Buscador
    const [busqueda, setBusqueda] = useState("");

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

    // Lógica para el Paginado
    const productosPorPagina = 4;

    const productosFiltrados = productos.filter(
        (producto) =>
            producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            (producto.categoria &&
                producto.categoria.toLowerCase().includes(busqueda.toLowerCase()))
    );

    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosActuales = productosFiltrados.slice(indicePrimerProducto, indiceUltimoProducto);

    // Cambiar de página
    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
    const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);


    // Resetear a página 1 con búsquedas
    const manejarBusqueda = (e) => {
        setBusqueda(e.target.value);
        setPaginaActual(1);
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
            {/* Barra de búsqueda */}
            <div className="row mb-4">
                <div className="col-12 col-md-6">
                    <label className="form-label fw-bold">Buscar productos</label>
                    <input
                        type="text"
                        placeholder="Buscar por nombre o categoría..."
                        className="form-control"
                        value={busqueda}
                        onChange={manejarBusqueda}
                    />
                    {busqueda && (
                        <small className="text-muted">
                            Mostrando {productosFiltrados.length} de {productos.length} productos
                        </small>
                    )}
                </div>
            </div>
            <ul className={styles.list}>
                {productosActuales.map((producto) => (
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

            {/* Paginador - Estilo simplificado */}
            {productosFiltrados.length > productosPorPagina && (
                <div className="d-flex justify-content-center my-4">
                    {Array.from({ length: totalPaginas }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`btn mx-1 ${paginaActual === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
                            onClick={() => cambiarPagina(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}

            {/* Información de la página actual */}
            {productosFiltrados.length > 0 && (
                <div className="text-center text-muted mt-2">
                    <small>
                        Mostrando {productosActuales.length} productos
                        (página {paginaActual} de {totalPaginas})
                    </small>
                </div>
            )}
        </main >
    )
}

export default Productos;