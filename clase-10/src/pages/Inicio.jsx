import styles from "../styles/pages/Inicio.module.css";

function Inicio() {
    return (
        <main className={styles.inicio}>
            <div className={styles.seccionInicio}>
                <section id="inicio">
                    <div className={styles.card}>
                        <h1>Bienvenido a la Página de Inicio</h1>
                        <h1>Tienda Online E-Commerce</h1>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Inicio;