import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function Pagar() {
  const { usuario, carrito, cerrarSesion, vaciarCarrito } = useAppContext()
  const navigate = useNavigate();

  // Datos del carrito
  // Calculo del total
  // Por cantidad y precio por unidad
  const total = carrito.reduce((suma, producto) => {
    const cantidad = Number(producto.cantidad || 1);
    const precioUnitario = Number(producto.precio || 0);
    return suma + cantidad * precioUnitario;
  }, 0);

  // Función para finalizar compra
  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    vaciarCarrito();
    navigate("/productos");
  };

  return (
    <div>
      {/* Datos del usuario */}
      <div>
        <h2>{usuario.nombre}</h2>
        <p>Email: {usuario.email}</p>
        <button onClick={cerrarSesion}>Cerrar sesión</button>
        <hr />
      </div>
      {/* Datos del Carrito */}
      <div>
        <h2>Tu compra:</h2>

        {carrito.length > 0 ? (
          <div>
            {carrito.map((producto) => {
              const cantidad = Number(producto.cantidad || 1);
              const precioUnitario = Number(producto.precio || 0);
              const subtotal = cantidad * precioUnitario;
              return (
              <div key={producto.id}>
                <img src={producto.avatar} alt={producto.nombre} width="60" />
                <div>{producto.nombre}</div>
                <div>Precio unidad: ${Number(precioUnitario).toFixed(3)}</div>
                <div>Cantidad: {cantidad}</div>
                <strong>Subtotal: ${Number(subtotal).toFixed(3)}</strong>
              </div>
              );
            })}
            <h3>Total a pagar: ${Number(total).toFixed(3)}</h3>
          </div>
        ) : (
          <p>No hay productos en el carrito.</p>
        )}

      </div>

      <div>
        {carrito.length > 0 && (
          <button onClick={comprar}>Confirmar y Pagar</button>
        )}
        <button onClick={() => navigate("/productos")}>
          {carrito.length > 0 ? "Seguir Comprando" : "Volver a Productos"}
          </button>
      </div>
    </div >
  );
}

export default Pagar;