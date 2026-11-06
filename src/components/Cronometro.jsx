import { useState, useEffect } from 'react';


function Cronometro(){

    const [segundos, setSegundos] = useState(0);

    return(
        < div>
            <h2>Segundos: {segundos}</h2>
            <button type="start" className="btm btm-primary" onclick={() => setSegundos(segundos + 1)}>Iniciar</button>
            <button type="stop" className="btm btm-warning" onclick={() => setSegundos(segundos)}>Parar</button>
            <button type="reset" className="btm btm-danger" onclick={() => setSegundos(0)}>Reiniciar</button>
        </div>
    )
}
        </div>
    )

}  