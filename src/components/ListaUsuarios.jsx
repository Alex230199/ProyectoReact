import { useState, useEffect } from 'react'

const URL_USUARIOS = 'https://jsonplaceholder.typicode.com/users'

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

    useEffect(() => {
    async function cargarUsuarios() {
      try {
        const response = await fetch(URL_USUARIOS)
        if (!response.ok) {
          throw new Error('Error HTTP ' + response.status)
        }
        const data = await response.json()
        setUsuarios(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setCargando(false)
      }
    }

    cargarUsuarios()
  }, [])

  if (cargando) return <p>Cargando...</p>
  if (error) return <div className="alert alert-danger">{error}</div>

  return (
    <ul className="list-group">
      {usuarios.map((u) => (
        <li key={u.id} className="list-group-item">
          {u.name} ({u.email})
        </li>
      ))}
    </ul>
  )
}

export default ListaUsuarios
