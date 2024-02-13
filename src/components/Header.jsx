import PropTypes from 'prop-types';
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({ 
     gastos,
     setGastos,
     presupuesto,
     setPresupuesto,
     isValidPresupuesto,
     setIsValidPresupuesto
}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {isValidPresupuesto ? (
            <ControlPresupuesto
              gastos={gastos}
              setGastos={setGastos}
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              setIsValidPresupuesto={setIsValidPresupuesto}
            />
        ) : (
           <NuevoPresupuesto
             presupuesto={presupuesto}
             setPresupuesto={setPresupuesto}
             setIsValidPresupuesto={setIsValidPresupuesto}
        />
        )}
        
      
    </header>
  )
}
Header.propTypes = {
  gastos: PropTypes.array.isRequired,
  presupuesto: PropTypes.number.isRequired,
  setPresupuesto: PropTypes.func.isRequired,
  isValidPresupuesto: PropTypes.bool.isRequired,
  setIsValidPresupuesto: PropTypes.func.isRequired,
};

export default Header
