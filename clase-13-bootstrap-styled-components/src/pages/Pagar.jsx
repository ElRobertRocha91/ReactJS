import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useCartContext } from "../context/CartContext";

function Pagar() {
  const { usuario, cerrarSesion } = useAuthContext();
  const { carrito, total, vaciarCarrito } = useCartContext();
  const navigate = useNavigate();

  const tokenActual = localStorage.getItem('authToken');

  // Función para finalizar compra
  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    vaciarCarrito();
    navigate("/productos");
  };

  return (
    <div className="vh-auto">
      {/* Datos del usuario */}
      <div className="d-flex justify-content-around align-items-cemter p-2 bg-black text-light">
        <h2 className="mb-0">¡Hola, {usuario.nombre}!</h2>
        <div className="d-flex align-items-center">
          <p className="mb-0">Email: {usuario.email}</p>
        </div>
        <div className="d-flex align-items-center">
          <strong>Token: </strong>{tokenActual}
        </div>
        <button onClick={cerrarSesion} className="btn btn-danger btn-lg">Cerrar sesión</button>
      </div>
      {/* Datos del Carrito */}
      <div className="pt-5">
        <h2>Tu compra:</h2>

        {carrito.length > 0 ? (
          <div>
            {carrito.map((producto) => {
              const cantidad = Number(producto.cantidad || 1);
              const precioUnitario = Number(producto.precio || 0);
              const subtotal = cantidad * precioUnitario;
              return (
                <div key={producto.id} className="d-flex justify-content-center">
                  <img src={producto.avatar} alt={producto.nombre} width="200" height="200" />
                  <div className="d-flex flex-column align-items-cemter justify-content-center gap-3">
                    <div className="fs-5 fw-bold">{producto.nombre}</div>
                    <div>Precio unidad: ${Number(precioUnitario).toFixed(3)}</div>
                    <div className="border-bottom">Cantidad: {cantidad}</div>
                    <div>
                      <strong>Subtotal: ${Number(subtotal).toFixed(3)}</strong>
                    </div>
                  </div>
                </div>
              );
            })}
            <h3 className="fs-4 fw-bold p-3">Total a pagar: ${Number(total).toFixed(3)}</h3>
          </div>
        ) : (
          <p>No hay productos en el carrito.</p>
        )}

      </div>

      <div className="d-flex justify-content-evenly p-3">
        {carrito.length > 0 && (
          <button onClick={comprar} className="btn btn-primary">Confirmar y Pagar</button>
        )}
        <button onClick={vaciarCarrito} className="btn btn-warning">Vaciar Carrito</button>
        <button onClick={() => navigate("/productos")} className="btn btn-success">
          {carrito.length > 0 ? "Seguir Comprando" : "Volver a Productos"}
        </button>
      </div>
    </div >
  );
}

export default Pagar;