import "../styles/GaleriaIntereses.css";

function GaleriaIntereses({ intereses }) {
    function Click(e) {
        e.target.style.backgroundColor = '#28a745';
        e.target.style.color = '#fff';
    }

    return (
        <div className="galeria">
            <ul className="listaIntereses">
                {intereses.map(interes => (
                    <li key={interes}>
                        <button onClick={Click}>{interes}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GaleriaIntereses;