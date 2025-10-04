import React from "react";

function Nav() {
    return (
        <nav styles={ { backgroundColor: "#333", padding: "10px", color: "wihte" } }>
            <ul style={ { listStyle: "none", display:"flex", justifyContent: "space-around", margin: 0} }>
                <li><a href="#" style={ { color: "white", textDecoration: "none"} }>Inicio</a></li>
                <li><a href="#" style={ { color: "white", textDecoration: "none"} }>Acerce de</a></li>
                <li><a href="#" style={ { color: "white", textDecoration: "none"} }>Contacto</a></li>
            </ul>
        </nav>
    )
}

export default Nav;