import { useEffect, useState } from 'react';

// Componente con el temporizador
function EventoTiempo() {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const tiempo = setInterval(() => {
            setSegundos((anterior) => {
                console.log(`${anterior + 1} segundos`);
                return anterior + 1;
            });
        }, 1000);

        // Función de limpieza
        return () => {
            clearInterval(tiempo);
            console.log('Temporizador detenido');
        };
    }, []);

    return <div>Temporizador en curso: {segundos} segundos.</div>;
}

function Temporizador() {
    const [mostrarTemporizador, setMostrarTemporizador] = useState(true);

    return (
        <>
            <button onClick={() => setMostrarTemporizador(true)}>Montar</button>
            <button onClick={() => setMostrarTemporizador(false)}>Desmontar</button>
            {mostrarTemporizador && <EventoTiempo />}
        </>
    )
}

export default Temporizador;