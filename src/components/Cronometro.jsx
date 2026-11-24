import { useState, useEffect } from 'react';




export function Cronometro(){



    const [segundos, setSegundos] = useState(0);
    const [enMarcha, setEnMarcha] = useState(false);

    useEffect(() => {
        let intervalo = null;
        if (enMarcha) {
            intervalo = setInterval(() => {
                setSegundos((valorActual) => valorActual + 1);
            }, 1000);
        }
        return () => clearInterval(intervalo);
    }, [enMarcha]);

 
    return(
            <div className={`cronometro-contenido ${enMarcha ? 'en-marcha' : ''}`}>
            <h2>Segundos que pasan: {segundos}</h2>
                <div className="cronometro-botones">
                    <button type="button" className="btn btn-primary" onClick={() => setEnMarcha(true)}>Iniciar</button>
                    <button type="button" className="btn btn-warning" onClick={() => setEnMarcha(false)}>Parar</button>
                    <button type="button" className="btn btn-danger" onClick={() => { setEnMarcha(false); setSegundos(0) }}>Reiniciar</button>
                </div>
        </div>
    )
}
        