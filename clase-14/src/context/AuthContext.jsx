import { createContext, useContext, useState, useEffect } from "react";

// Contexto de autenticación
export const AuthContext = createContext();

// Proveedor de autenticación
export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);
    // Establecemos el estado de cargando para ejecutarse en el UseEffect()
    // para prevenir el undefined en el token del logalStorage, 
    // dandole tiempo de ir a buscar el token a al DOM virtual de React
    const [cargando, setCargando] = useState(true);

    // Verificar el token al cargar la aplicación
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const emailGuardado = localStorage.getItem("authEmail");
        if (token) {
            const username = token.replace("face-token-", "");
            setUsuario({
                nombre: username,
                email: emailGuardado || ""
            });
        }

        setCargando(false);
    }, []);

    // Función para iniciar sesión
    const iniciarSesion = (username, emailIngresado) => {
        const token = `face-token-${username}`;
        // Seteamos tanto el token y el email para lograr la persistencia de datos en la sesión del usuario
        localStorage.setItem("authToken", token);
        localStorage.setItem("authEmail", emailIngresado);

        // const emailGuardado = localStorage.getItem("authEmail");
        setUsuario({
            nombre: username,
            email: emailIngresado || ""
        });
    };

    // Función para cerrar sesión
    const cerrarSesion = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authEmail");
        setUsuario(null);
    };

    const value = {
        usuario,
        iniciarSesion,
        cerrarSesion,
        isAuthenticated: !!usuario, // => Propiedad computada
        esAdmin: usuario?.nombre === 'admin',
        cargando
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

// Hook personalizado
export function useAuthContext() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext debe usarse dentro de AuthProvider");
    }
    return context;
}
