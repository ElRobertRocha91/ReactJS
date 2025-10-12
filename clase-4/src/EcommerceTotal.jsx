import { useState } from "react";

function Layout({ children }) {
    return (
        <>
            <head>
                <title>Tienda Online</title>
                </head>
            <main>{children}</main>
            <footer>
                <p>@ Tienda Online - Todos los derechos reservados</p>
            </footer>
        </>
    )
}

function ListProducts({ agregarAlCarrito }) {
    const products = [
        { id: 1, nombre: 'Camiseta', precio: 15.000 },
        { id: 2, nombre: 'Cantalón', precio: 30.000 },
        { id: 3, nombre: 'Zapatos', precio: 50.000 }
    ];

    return (
        <div>
            <h2>Productos disponibles</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <span>{product.nombre} - ${product.precio.toFixed(3)}</span>
                    <button onClick={() => agregarAlCarrito(product)}>Agregar</button>
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
                    <div style={{marginTop: '15px', padding: '10px', backgroundColor: '#ff55', fontWeight: 'bold' }}>
                        Total: ${total.toFixed(3)}
                    </div>
                    <br />
                    <button onClick={vaciarCarrito} 
                    style={{marginTop: '10px', padding: '5px 10px', cursor:'pointer', backgroundColor: '#ff4444', color: 'white' }}
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