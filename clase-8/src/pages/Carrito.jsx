import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function Carrito() {
    const { carrito, setCarrito, vaciarCarrito } = useAppContext();

    const navigate = useNavigate();

    // Lógica para sumar y restar cantidad
    const quitarCantidad = (id) => {
        const carritoActualizado = carrito.map(producto => {
            if(producto.id === id) {
                const cantidadActual = producto.cantidad || 1;
                if(cantidadActual === 1) {
                    return null;
                }
                return {
                    ...producto,
                    cantidad: cantidadActual - 1
                }
            }
            return producto;
        }).filter(producto => producto !== null);

        setCarrito(carritoActualizado);
    };

    const agregarCantidad = (id) => {
        const nuevoCarrito = carrito.map(producto => {
            if (producto.id === id) {
                return {
                    ...producto,
                    cantidad: (producto.cantidad || 1) + 1
                }
            }
            return producto;
        });
        setCarrito(nuevoCarrito);
    };

    // Lógica para calcular el costo total de la compra
    const total = carrito.reduce((sum, item) => {
        const cantidad = item.cantidad || 1;
        return sum + (Number(item.precio) * cantidad)
    }, 0);

    const irAPagar = () => {
    navigate("/pagar", { state: { carrito } });
  };

    return (
        <main>
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
                                (Cantidad: {item.cantidad || 1})
                                <button onClick={() => quitarCantidad(item.id)}>-</button>
                                <button onClick={() => agregarCantidad(item.id)}>+</button>
                            </div>
                        ))}
                        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#ff55', fontWeight: 'bold' }}>
                            Total: ${Number(total).toFixed(3)}
                        </div>
                        <br />
                        <button onClick={vaciarCarrito}
                            style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer', backgroundColor: '#ff4444', color: 'white' }}
                        >
                            Vaciar Carrito
                        </button>
                        <br />
                        <button onClick={irAPagar}>Pagar</button>
                    </>
                )}
            </div>
        </main>
    )
}

export default Carrito;