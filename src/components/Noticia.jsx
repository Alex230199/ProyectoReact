function Noticia({ noticia, guardada, onGuardar }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{noticia.titulo}</h5>
        <p className="card-text">{noticia.descripcion}</p>
        {onGuardar && (
          <button className="btn btn-sm btn-primary"
                  disabled={guardada}
                  onClick={() => onGuardar(noticia)}>
            {guardada ? 'Guardada' : 'Guardar'}
          </button>
        )}
      </div>
    </div>
  )
}

export default Noticia
