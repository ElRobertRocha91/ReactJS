import { useEffect } from "react";

function Montaje() {


    useEffect(() => {
        console.log('El componente se esta montando.');

        return () => {
            console.log('El componente se ha desmontado.');
        }
    }, []);// El array de dependencia asegura que solo se ejecute una vez, al montar el componente.

    return (
        <p>Hola, soy un componente con useEffect</p>     
    )
}

export default Montaje;