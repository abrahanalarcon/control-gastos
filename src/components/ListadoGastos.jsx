import PropTypes from 'prop-types';
import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto}) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? 'Gastos' : 'No hay Gastos aun'}</h2>
      {gastos.map( gasto => (
        <Gasto
          key={gasto.id }
          gasto={gasto}
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
        />
        
      ))}

    </div>
  )
}
ListadoGastos.propTypes = {
  gastos: PropTypes.array.isRequired,
  setGastoEditar: PropTypes.func.isRequired,
  eliminarGasto: PropTypes.func.isRequired,
};
export default ListadoGastos
