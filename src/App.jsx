import { useState } from 'react'
import './App.css'
import Saludo from './components/saludo.jsx'
import Calculadora from './components/Calculadora.jsx'
import { Cronometro } from './components/Cronometro.jsx'
import { TemaContext } from './components/TemaContext.js'



const animales = [
    { id: 1, nombre: 'Perro' },
  { id: 2, nombre: 'Gato' },
  { id: 3, nombre: 'Conejo' },
  { id: 4, nombre: 'Ratón' },
  { id: 5, nombre: 'Caballo' },

]

const productos = [
  { id: 1, titulo: 'Mesa', descripcion: 'Estructura de 4 patas de madera', precio: 20, oferta: true },
  { id: 2, titulo: 'Silla', descripcion: 'Estructura de 4 patas de madera para sentarse', precio: 10, oferta: false },
  { id: 3, titulo: 'Boligrafo', descripcion: 'Artilugio para escribir con tinta', precio: 2.50, oferta: true },
  { id: 4, titulo: 'Lapiz', descripcion: 'Artilugio para escribir con grafito', precio: 0.50, oferta: false },
]

function App() {
  const [tema, setTema] = useState('claro')
  const cambiarTema = () => {
    setTema((temaActual) => temaActual === 'claro' ? 'oscuro' : 'claro')
  }

  return (
    
<div className={`container my-4 app-shell tema-${tema}`}>
      <h1>Mi primera aplicación React</h1>
      <Saludo nombre="Alex" />
      
     
      <TemaContext.Provider value={{ tema }}>
        <div style = {{ padding: '20px'}}>
    <h1> Práctica de Cronómetro</h1>

      <button onClick={cambiarTema}>Cambiar a modo {tema === 'claro' ? 'oscuro' : 'claro'}
     
      </button>
      <Cronometro />
        </div>
          
      </TemaContext.Provider>
      <Calculadora />
      <div calssName = " card h-100">
      < div className= "card-body">
      <span aclassNmae ="card-title">Animales</span>
      <ul>
        {animales.map((animal,index) => (
          <li key ={animal.id}>{animal.nombre}</li>
        ))}
      </ul>
      </div>
    </div>
  

        <div className = "card h-100">
      <div className = "card-body">
      <span className = "card-title">Producto 1</span>
      
        {productos.map((producto) => (
          <div className="mb-3" key={producto.id}>
            <h2 className="card-title">{producto.titulo}</h2>
            <p className="card-text">{producto.descripcion}</p>
            <p className="card-text">{producto.precio} €</p>
            {producto.oferta && (<span className="badge bg-danger">En oferta</span>
            )}
          </div>
        ))}

      
      </div>


        </div>

    </div>

    

  ) 
}

export default App
