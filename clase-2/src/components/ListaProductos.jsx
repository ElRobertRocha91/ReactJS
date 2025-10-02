function ListaProductos({ productos }) {
    
    return (
        <ol>
            {productos.map(producto => (
                <li key={producto}>{producto}</li>
            ))}
        </ol>
    )
}

export default ListaProductos;