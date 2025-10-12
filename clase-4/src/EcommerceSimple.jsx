import { useState } from "react";

function EcommerceSimple() {

    // Lista de productos
    const listaProductos = [
        {id: 1, nombre: 'Camiseta', precio: 15.000}, 
        {id: 2, nombre: 'Cantalón', precio: 30.000},
        {id: 3, nombre: 'Zapatos', precio: 50.000}
    ];

    // Estado del Carrito
    const [carrito, setCarrito] = useState([]);

    // Función manejadora para agregar productos al carrito
    const agregarCarrito = (producto) => {
        setCarrito([
            ...carrito, 
            producto
        ]);
    };

    // Función para vaciar el carrito
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <main>
            <div id="tarjeta">
                <h3>Productos</h3>
                <ul>
                    {listaProductos.map((producto) => (
                        <li key={producto.id}>
                            {producto.nombre}: ${producto.precio.toFixed(3)}
                            <button onClick={() => agregarCarrito(producto)}>Agregar</button>
                        </li>
                    ))}
                </ul>
                <br />
                <h2>=====================================</h2>
                <h3>Carrito:</h3>
                {carrito.map((producto, index) => (
                    <p key={producto.id}>
                        {producto.nombre}: ${producto.precio.toFixed(3)}
                    </p>
                ))}
                <button onClick={vaciarCarrito}>Vaciar</button>
            </div>
        </main>
    )
}

export default EcommerceSimple;