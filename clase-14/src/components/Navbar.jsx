import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
// import styles from "../styles/components/Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

function Navbar() {
  const { isAuthenticated, usuario, cerrarSesion } = useAuthContext();
  const { carrito, vaciarCarrito } = useCartContext();
  const navigate = useNavigate();

  // Función para contar la cantidad de productos en el icons del carrito de compras
  const totalItemsCarrito = carrito.reduce((total, item) => total + item.cantidad, 0);

  // Función para solucionar el BUGS detectado en la sesión.
  // Limpia el carrito luego del cierre de sesión
  const manejarCerrarSesion = () => {
    navigate("/productos");

    // Pausa de 1" para asegurar la navegación
    setTimeout(() => {
      vaciarCarrito();
      cerrarSesion();
    }, 100);
  }

  return (
    <>
      <NavbarContainer className="navbar navbar-expand-lg navbar dark fixed-top">
        <div className="container-fluid">
          <Logo to={"/"} className="navbar-brand">Tienda Online</Logo>
          {/* MENU HAMBURGUESA RESPONSIVE */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* ENLACE PUBLICO PARA USUARIOS */}
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/servicios" className="nav-link">Servicios</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/productos" className="nav-link">Productos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
              </li>
              {/* ENLACE PRIVADO PARA EL ADMIN - Solo visible para el Admin */}
              {usuario?.nombre === "admin" && (
                <li className="nav-item">
                  <NavLink to="/formulario-producto" className="nav-link">Agregar Producto</NavLink>
                </li>
              )}
            </ul>

            {/* ENLACE PRIVADO REQUIERE LOGIN  - Tanto para el Usuario y el Admin*/}
            <SeccionUsuario className="d-flex alig-items-center gap-3">
              <ContenedorCarrito>
                <IconoCarrito to="/pagar" className="nav-link d-flex align-items-center">
                  <span className="me-1">Carrito</span>
                  <FaShoppingCart />
                  {totalItemsCarrito > 0 && (
                    <ContadorCarrito>
                      {totalItemsCarrito}
                    </ContadorCarrito>
                  )}
                </IconoCarrito>
              </ContenedorCarrito>

              {isAuthenticated ? (
                <ContenedorUsuario className="d-flex align-items-center gap-3">
                  <Bienvenida>Hola, {usuario.nombre}</Bienvenida>
                  {usuario.nombre === "admin" && (
                    // ENLACE PRIVADO PARA EL ADMIN - Solo visible para el Admin 
                    <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                  )}
                  <BotonCerrarSesion onClick={manejarCerrarSesion} className="btn btn-outline-light">
                    Cerrar Sesión
                  </BotonCerrarSesion>
                </ContenedorUsuario>
              ) : (
                // ENLACE PUBLICO PARA EL USUARIO - Visible para el Admin y el Usuario
                <NavLink to="/iniciar-sesion" className="nav-link">Iniciar Sesión</NavLink>
              )}

            </SeccionUsuario>
          </div>
        </div>
      </NavbarContainer>
      <NavbarSpacer />
    </>
  )
}

export default Navbar;

// Styled Components actualizados
const NavbarContainer = styled.nav`
  background-color: #556B2F !important;
  padding: 0.5rem 1rem;
`;

const NavbarSpacer = styled.div`
  height: 80px;

  @media (max-width: 991.98px) {
    height: 76px;
  }
`;

const Logo = styled(Link)`
  color: white !important;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
 
  &:hover {
    color: white !important;
  }
`;

// NavLink normal (para usuarios)
const NavLink = styled(Link)`
  color: white !important;
  text-decoration: none;
  padding: 0.5rem 1rem;
 
  &:hover {
    color: white !important;
    text-decoration: underline;
  }
`;

// NavLink especial para admin
const NavLinkAdmin = styled(Link)`
  color: black !important;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
 
  &:hover {
    color: gold !important;
    text-decoration: underline;
  }
`;

const Bienvenida = styled.span`
  color: white;
  font-size: 0.9rem;
  margin: 0;
  white-space: nowrap;

  @media (max-width: 991.98px) {
    margin-bottom: 0.5rem;
  }
`;

const BotonCerrarSesion = styled.button`
  background: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  white-space: nowrap;
 
  &:hover {
    background: white;
    color: #556B2F;
  }

  @media (max-width: 991.98px) {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const ContenedorCarrito = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconoCarrito = styled(Link)`
  color: white !important;
  text-decoration: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 1rem;
  gap: 5px;
 
  &:hover {
    color: gold !important;
  }
`;

const ContadorCarrito = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`;

const SeccionUsuario = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 991.98px) {
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    width: 100%;
  }
`;

const ContenedorUsuario = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 991.98px) {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
`;