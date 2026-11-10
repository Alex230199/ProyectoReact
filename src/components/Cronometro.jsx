import { useState, useEffect, useContext } from 'react';
import { TemaContext } from './TemaContext.js';



export function Cronometro(){

    const [segundos, setSegundos] = useState(0);
    const [enMarcha, setEnMarcha] = useState(false);

    const { tema } = useContext(TemaContext);

    useEffect(() => {
        let intervalo = null;
        if (enMarcha) {
            intervalo = setInterval(() => {
                setSegundos((valorActual) => valorActual + 1);
            }, 1000);
        }
        return () => clearInterval(intervalo);
    }, []);

    const estatusTema = {
        backgroundColor: tema === 'oscuro' ? '#333' : '#f0f0f0',
        color: tema === 'oscuro' ? '#fff' : '#000',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'left',
        margin: '20px 0'
    };

    return(
        <div style={estatusTema}>
            <h2>Segundos: {segundos}</h2>
            <button type="button" className="btn btn-primary" onClick={() => setEnMarcha(true)}>Iniciar</button>
            <button type="button" className="btn btn-warning" onClick={() => setEnMarcha(false)}>Parar</button>
            <button type="button" className="btn btn-danger" onClick={() => { setEnMarcha(false); setSegundos(0) }}>Reiniciar</button>
        </div>
    )
}
        