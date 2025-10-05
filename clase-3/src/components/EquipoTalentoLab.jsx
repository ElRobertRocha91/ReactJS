import "../styles/EquipoTalentoLab.css";

function EquipoTalentoLab({ lista }) {

    return (
        <div>
            <h2>Equipo de Talento Lab</h2>
            <br />
            <ul className="container">
                {lista.map(el => (
                    <li key={el.nombre} className="cardPersonal">
                        <img src={el.image} alt={el.nombre} />
                        <h3>{el.nombre}</h3>
                        <p>{el.rol}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EquipoTalentoLab;