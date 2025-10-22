function Carrito({ carrito, setCarrito }) {
    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const total = carrito.reduce((sum, item) => sum + Number(item.precio), 0);

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
        </main>
    )
}

export default Carrito;