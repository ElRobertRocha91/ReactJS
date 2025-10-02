function ListaUsuarios() {
    const usuarios = ["Ana", "Luis", "Pedro", "Maria"];
    return (
        <div>
            <h2>Lista de usuarios</h2>
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario}>{usuario}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListaUsuarios;