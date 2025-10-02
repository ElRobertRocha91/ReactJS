function Boton({ texto, color }) {
    const estilo = { backgroundColor: color, color: 'white', padding:'10px', margin:'5px', border: 'none'};

    return <button style={estilo}>{texto}</button>
}

export { Boton }