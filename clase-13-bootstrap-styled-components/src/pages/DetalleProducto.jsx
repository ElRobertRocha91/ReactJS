import { Link, useLocation, useParams } from "react-router-dom";
// import styles from "../styles/pages/DetalleProducto.module.css";
import styled from "styled-components";

function DetalleProducto() {
    const { id } = useParams();
    const location = useLocation();
    const producto = location.state?.producto;

    if (!producto) {
        return (
            <div>
                <p>No se pudo cargar el producto.</p>
                <br />
                <Link to="/productos">Volver a productos.</Link>
            </div>
        )
    }
    return (
        <main>
            <section>
                <div className="container-md py-3 mb-3">
                    <h2>Detalle del Producto {id}</h2>
                    <br />
                    {/* Fila superior */}
                    <div className="row align-items-center gap-1 mb-5">
                        {/* Columna para la imagen - IZQUIERDA */}
                        <div className="col-md-5">
                            <div className="card border-0">
                                <div className="card-body">
                                    <img src={producto.avatar} alt={producto.nombre} className="img-fluid rounded w-75" />
                                </div>
                            </div>
                        </div>
                        {/* Columna para la información - DERECHA */}
                        <div className="col-md-6">
                            <div className="card border-0">
                                <div className="card-body p-1">
                                    <h3 className="text-primary mb-2">{producto.nombre}</h3>
                                    <div className="mb-2">
                                        <strong>Descripción: </strong>
                                        <p className="card-text mb-1">{producto.descripcion}</p>
                                    </div>
                                    <div className="mb-2">
                                        <strong>Categoría: </strong>
                                        <p className="badge bg-secondary ms-1">{producto.categoria}</p>
                                    </div>
                                    <div className="mb-3">
                                        <strong></strong>
                                        <p className="text-success d-inline ms-1">Precio: ${producto.precio}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>
                    <Link to={'/productos'}>
                        <BotonEstilizado>Volver</BotonEstilizado>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default DetalleProducto;

const BotonEstilizado = styled.button`
  background: white;
  color: black;
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;

  &:hover {
    background: #31312eff;
    color: white;
  }
`;