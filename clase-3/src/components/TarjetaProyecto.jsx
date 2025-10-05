import "../styles/TarjetaProyecto.css";

function TarjetaProyecto({ titulo, descripcion, botonTexto }) {
    return (
        <div className="tarjetaProyecto">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <button onClick={() => console.log(`Explorando: ${titulo}`)}>{botonTexto}</button>
        </div>
    )
}

export default TarjetaProyecto;