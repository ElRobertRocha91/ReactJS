import { useEffect, useState } from "react";

function Layout({ children }) {
    return (
        <>
            <header>
                <h1>Tienda Online</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>@ Tienda Online - Todos los derechos reservados</p>
            </footer>
        </>
    )
}

function ListProducts({ agregarAlCarrito }) {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando ] = useState(true);
    const [error, setError] = useState(null);

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
        <div>
            <h2>Productos disponibles</h2>
            {productos.map((producto) => (
                <div key={producto.id}>
                    <span>{producto.nombre} - ${producto.precio}</span>
                    <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
                </div>
            ))}
        </div>
    )
}

function Carrito({ carrito, vaciarCarrito }) {
    // Costo total de la compra
    const total = carrito.reduce((sum, item) => sum + Number(item.precio), 0);
    console.log(total);
    return (
        <div>
            <h2>Carrito de compras</h2>
            {/* Operador Ternario */}
            {carrito.length === 0 ? (
                <p>El carrito esta vacío</p>
            ) : (
                <>
                    {carrito.map((item) => (
                        <div key={item.id}>
                            {item.nombre} - ${Number(item.precio).toFixed(3)}
                        </div>
                    ))}
                    <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#ff55', fontWeight: 'bold' }}>
                        Total: ${total.toFixed(3)}
                    </div>
                    <br />
                    <button onClick={vaciarCarrito}
                        style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer', backgroundColor: '#ff4444', color: 'white' }}
                    >
                        Vaciar Carrito
                    </button>
                </>
            )}
        </div>
    )
}

function EcommercerTotal() {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (product) => {
        setCarrito([
            ...carrito,
            product
        ]);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    return (
        <Layout>
            <ListProducts agregarAlCarrito={agregarAlCarrito} />
            <Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} />
        </Layout>
    )
}

export default EcommercerTotal;