function Boton() {
    
    function manejarClick() {
        alert('Boton clickeado!');
    }

    return(
        <button onClick={manejarClick}>Hacer click</button>
    )
}

export default Boton;