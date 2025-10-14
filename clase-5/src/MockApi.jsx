import React, { useEffect, useState} from "react";

function Productos() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
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
        <ul>
            {productos.map((producto) => (
                <li key={producto.id}>
                    Nombre: {producto.nombre}
                    <br />
                    Descripción: {producto.descripcion}
                    <br />
                    <img src={producto.avatar} alt={producto.nombre} width="100" />
                </li>
            ))}
        </ul>
    )
}

export default Productos;