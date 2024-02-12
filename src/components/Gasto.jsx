import PropTypes from 'prop-types';
import {
   LeadingActions,
   SwipeableList,
   SwipeableListItem,
   SwipeAction,
   TrailingActions
}from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import { formatearFecha } from '../helpers';

import IconoAhorrro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'

import IconoSuscripciones from '../img/icono_suscripciones.svg';


const diccionarioIconos = {
  
  ahorro: IconoAhorrro,
  comida: IconoComida,
  casa:  IconoCasa,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones

}

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {
    const { categoria, nombre, cantidad, id, fecha } = gasto;

    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction  onClick={() => setGastoEditar(gasto)}>
             Editar
          </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
           <SwipeAction 
             onClick={() => eliminarGasto(id)}
             destructive={true}
             style={{
              backgroundColor: '#FF5733',
              color: 'white',
              borderRadius: '5px',
              padding: '10px',
              transition: 'background-color 0.3s, color 0.3s'
            }}
          >
            <span style={{ marginRight: '5px' }}>🗑️</span>Eliminar
             
          </SwipeAction>
        </TrailingActions>
    )



  return (
    <SwipeableList>
      <SwipeableListItem
       leadingActions={leadingActions()}
       trailingActions={trailingActions()}
       >
        <div className="gasto sombra">
          <div className="contenido-gasto"> 
            <img
               src={diccionarioIconos[categoria]}
               alt="Icono Gasto"
            />
            <div className="descripcion-gasto">
                <p className="categoria">{categoria}</p>
                <p className="nombre-gasto">{nombre}</p>
                <p className="fecha-gasto">
                    Agregado el:{''}
                    <span>{formatearFecha(fecha)}</span>
                </p>
            </div>
          </div>
          <p className="cantidad-gasto">${cantidad}</p>
        </div>

     </SwipeableListItem>
    </SwipeableList>
    
  )
}

Gasto.propTypes = {
  gasto: PropTypes.shape({
    categoria: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    cantidad: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
  }).isRequired,
  setGastoEditar: PropTypes.func.isRequired,
  eliminarGasto: PropTypes.func.isRequired,
};
export default Gasto
