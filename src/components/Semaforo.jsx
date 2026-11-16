import { useEffect, useReducer } from 'react';

const estadoInicial = { luz: 'rojo', averiado: false, ciclos: 0 };
const tiempos = { rojo: 4000, verde: 3000, ambar: 1000 };

function reducirSemaforo(estado, accion) {

	  switch (accion.type) {
		  case 'AVANZAR':

			 if (estado.averiado) return estado;

			  if (estado.luz === 'rojo') return { ...estado, luz: 'verde' };

			  if (estado.luz === 'verde') return { ...estado, luz: 'ambar' };

			    return { ...estado, luz: 'rojo', ciclos: estado.ciclos + 1 };

		   case 'AVERIA':

			    return { ...estado, luz: 'ambar', averiado: true };

	case 'REPARAR':

			  return { ...estadoInicial, ciclos: estado.ciclos };

	 case 'RESET':

			   return estadoInicial;

     		 default:

		throw new Error('Acción desconocida');

	}

}

export function Semaforo() {

	 const [estado, dispatch] = useReducer(reducirSemaforo, estadoInicial);

	   useEffect(() => {
		    if (estado.averiado) return;

		 const temporizador = setTimeout(() => {

			  dispatch({ type: 'AVANZAR' });

	      	}, tiempos[estado.luz]);

	        	return () => clearTimeout(temporizador);

	}, 
    
    [estado.luz, estado.averiado]);

	return (

		<section style={{ textAlign: 'left', width: 'fit-content', margin: '1rem 0' }}>

			 <style>{`

				.semaforo-caja {
					display: flex;
					flex-direction: column;
					gap: 8px;
					width: 76px;
					padding: 12px;
					background: #202020;
					border-radius: 6px;
				}


				.semaforo-luz {
					width: 52px;
					height: 52px;
					border-radius: 50%;
					background: #3a3a3a;
				}


				   .semaforo-roja.encendida { background: #e53935; }

				 .semaforo-ambar.encendida { background: #ffb300; }

				   .semaforo-verde.encendida { background: #43a047; }

				 .semaforo-parpadeo { animation: semaforo-parpadeo 0.6s steps(2, start) infinite; }

				@keyframes semaforo-parpadeo { to { visibility: hidden; }
                
                }

			`}
            
            </style>

			  <div className="semaforo-caja" role="img" aria-label={`Semáforo ${estado.averiado ? 'averiado, ámbar parpadeando' : `luz ${estado.luz}`}`}>
                
				     <div className={`semaforo-luz semaforo-roja ${estado.luz === 'rojo' ? 'encendida' : ''}`} />

				  <div className={`semaforo-luz semaforo-ambar ${estado.luz === 'ambar' ? 'encendida' : ''} ${estado.averiado ? 'semaforo-parpadeo' : ''}`} 
                />
				  <div className={`semaforo-luz semaforo-verde ${estado.luz === 'verde' ? 'encendida' : ''}`} />

			</div>

			      <p>Ciclos completados: {estado.ciclos}</p>

			  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>

				   <button onClick={() => dispatch({ type: 'AVANZAR' })}>Avanzar</button>

				 <button onClick={() => dispatch({ type: 'AVERIA' })}>Avería</button>

				   <button onClick={() => dispatch({ type: 'REPARAR' })}>Reparar</button>

				   <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

			</div>

		</section>


	);
}
