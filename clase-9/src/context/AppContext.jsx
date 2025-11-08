// import { createContext, useContext, useState } from "react";

// // Paso 1:
// // Crear el contexto
// export const AppContext = createContext();

// // Paso 2:
// // Crear el proveedor del contexto
// export function AppProvider({ children }) {
//     // Estado de autenticación de usuario
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [usuario, setUsuario] = useState({ nombre: "", email: "" });

//     // Estado del carrito
//     const [carrito, setCarrito] = useState([]);

//     // Funciones manejadoras de la lógica del carrito
//     const agregarAlCarrito = (producto) => {
//         setCarrito(prevCarrito => {
//             const productoExistente = prevCarrito.find(item => item.id === producto.id);

//             // Validamos si existe ese producto en el carrito y si existe sumamos la cantidad
//             if(productoExistente){
//                 return prevCarrito.map(item => 
//                     item.id === producto.id ?
//                     {...item, cantidad: (item.cantidad || 1) + 1} 
//                     : item
//                 );
//             }else{
//                 return [
//                     ...prevCarrito,
//                     {
//                         ...producto,
//                         cantidad: 1
//                     }
//                 ];
//             }
//         });
//         alert(`Producto ${producto.nombre} agregado.`);
//     };

//     const vaciarCarrito = () => {
//         setCarrito([]);
//     };

//     const eliminarDelCarrito = (productoId) => {
//         setCarrito(carrito.filter(item => item.id !== productoId));
//     };

//     // Función para manejar el cierre de sesión
//     const cerrarSesion = () => {
//         setIsAuthenticated(false);
//         setUsuario({ nombre: "", email: "" });
//         vaciarCarrito();
//     };

//     // Valores que se provee a todos los componentes
//     const value = {
//         // Autenticación
//         isAuthenticated,
//         setIsAuthenticated,
//         usuario,
//         setUsuario,
//         cerrarSesion,

//         // Carrito
//         carrito,
//         setCarrito,
//         agregarAlCarrito,
//         vaciarCarrito,
//         eliminarDelCarrito
//     };

//     return (
//         <AppContext.Provider value={value}>
//             {children}
//         </AppContext.Provider>
//     )
// }

// export function useAppContext() {
//     const context = useContext(AppContext);
//     if (!context) {
//         throw new Error("useAppContext debe usarse dentro de AppProvider");
        
//     }
//     return context;
// }
