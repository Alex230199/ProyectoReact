import { useState, useEffect } from 'react'
import Noticia from './Noticia.jsx'

function ListaNoticias() {
  const [noticias, setNoticias] = useState([])
  const [guardadas, setGuardadas] = useState([])

  useEffect(() => {
    fetch('/noticias.json')
      .then((response) => response.json())
      .then((data) => setNoticias(data))
      .catch((error) => console.error(error))
  }, [])

  function estaGuardada(id) {
    return guardadas.some((n) => n.id === id)
  }

  function guardarNoticia(noticia) {
    if (!estaGuardada(noticia.id)) {      setGuardadas([...guardadas, noticia])
    }
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8">
          <h2>Noticias</h2>
          {noticias.map((n) => (
            <Noticia key={n.id} noticia={n}
                     guardada={estaGuardada(n.id)}
                     onGuardar={guardarNoticia} />
          ))}
        </div>
        <div className="col-md-4">
          <h2>Guardadas ({guardadas.length})</h2>
          {guardadas.map((n) => (
            <Noticia key={n.id} noticia={n} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListaNoticias

