import ListaUsuarios from './components/ListaUsuarios'
import { Boton } from './components/Boton'
import ListaProductos from './components/ListaProductos'
import Tarjeta from './components/Tarjeta'
import './App.css'

function App() {
  const productos = ['Manzana', 'Peras', 'Naranja', 'Frutilla'];

  return (
    <>
      <h1>Clase 2 - ReactJS</h1>
      <ListaUsuarios />
      <br />
      <Boton texto="Aceptar" color="green" />
      <Boton texto="Cancelar" color="red" />
      <br />
      <h2>Ejercicio de la clase 2</h2>
      <p>Crear un componente que reciba un array de productos como prop y los muestre en una lista ordenada.</p>
      <ListaProductos productos={productos} />
      <br />
      <p>Crear un componente "Tarjeta" que reciba props para mostrar un título, una descripción y un botón personalizado.</p>
      <br />
      <div className='container'>
        <Tarjeta
          titulo="Oferta especial"
          descripcion="20% de descuento en todos los productos"
          botonTexto="Ver más"
        />
        <Tarjeta
          titulo="Promoción"
          descripcion="25% de descuento en todos los productos"
          botonTexto="Ver más"
        />
      </div>
      <br />
      <p>Crea componente "Boton" con estilos diferentes segun la acción a ejecutar.</p>
      <br />
      <Boton texto="Aceptar" color="green" />
      <Boton texto="Cancelar" color="red" />
      <Boton texto="Ver más" color="blue" />
    </>
  )
}

export default App
