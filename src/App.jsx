import { useState } from 'react'
import './App.css'
import Saludo from './components/saludo.jsx'
import Calculadora from './components/Calculadora.jsx'
import { Cronometro } from './components/Cronometro.jsx'
import { TemaContext } from './components/TemaContext.js'
import { Semaforo } from './components/Semaforo.jsx'
import Formulario from './components/Formulario.jsx'




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
      <header className="app-header">
        <h1>Mi primera aplicación React</h1>
        <button type="button" className="btn btn-secondary" onClick={cambiarTema}>
          Cambiar a modo {tema === 'claro' ? 'oscuro' : 'claro'}
        </button>
      </header>

      <main className="actividades">
        <section className="actividad">
          <Saludo nombre="Alex" />
        </section>

        <TemaContext.Provider value={{ tema }}>
          <section className="actividad">
            <h2>Cronómetro</h2>
            <Cronometro />
          </section>
        </TemaContext.Provider>

        <section className="actividad">
          <h2>Calculadora</h2>
          <Calculadora />
        </section>

        <section className="actividad">
          <h2>Formulario</h2>
          <Formulario />
        </section>

        <section className="actividad">
          <h2>Semáforo</h2>
          <Semaforo />
        </section>

        <section className="actividad">
          <h2>Animales</h2>
          <ul>
            {animales.map((animal) => (
              <li key={animal.id}>{animal.nombre}</li>
            ))}
          </ul>
        </section>

        <section className="actividad">
          <h2>Productos</h2>
          {productos.map((producto) => (
            <div className="producto" key={producto.id}>
              <h3>{producto.titulo}</h3>
              <p>{producto.descripcion}</p>
              <p>{producto.precio} €</p>
              {producto.oferta && <span className="badge bg-danger">En oferta</span>}
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
