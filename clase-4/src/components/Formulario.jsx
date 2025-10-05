import { useState } from "react";

function Formulario() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    function manejarEnvio(evento) {
        evento.preventDefault();
        alert(`Formulario enviado por: ${nombre} ${apellido}`);
    }
    
    return (
        <form onSubmit={manejarEnvio}>
            <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            placeholder="Ingresar tu nombre"
            />
            <input 
            type="text" 
            value={apellido} 
            onChange={(e) => setApellido(e.target.value)} 
            placeholder="Ingresar tu apellido"
            />
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Formulario;