import {useState, useEffect} from 'react'
import Mensaje from './Mensaje';
import CerrarBtn from '../img/cerrar.svg'


const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar}) => {

    const [mensaje, setMensaje] = useState ('');
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    
    useEffect(() => {
        if( Object.keys(gastoEditar).length > 0){
             setNombre(gastoEditar.nombre)
             setCantidad(gastoEditar.cantidad)
             setCategoria(gastoEditar.categoria)
        }    
    }, []);

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 1000);
      
    }

    const handleSubmit = e => {
       e.preventDefault();

       if([ nombre, cantidad, categoria].includes('')){
           setMensaje('Todos los campos son obligatorios')
           
           setTimeout(() => {
               setMensaje('')
        
           },2000);
           return;
        }
        guardarGasto({nombre, cantidad, categoria})
    }

   
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img
               src={CerrarBtn}
               alt="cerrar modal"
               onClick={ocultarModal}
            />
        </div>

        <form 
           onSubmit={handleSubmit}
           className={`formulario ${animarModal ? "animar" :'cerrar'}`}
        >
            <legend>Nuevo Gasto</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            {/* first div */}
            <div className="campo">
                <label htmlFor="nombre">Nombre de Gasto</label>
                <input
                   id="nombre"
                   type="text"
                   placeholder="Anade el nombre del gasto"
                   value={nombre}
                   onChange={ e =>setNombre(e.target.value)}
                />
            </div>
             {/* first div */}
             <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input
                   id="cantidad"
                   type="number"
                   placeholder="Anade la cantidad  del gasto"
                   value={cantidad}
                   onChange={ e =>setCantidad(Number(e.target.value))}
                />
            </div>
             {/* first div */}
             <div className="campo">
                <label htmlFor="categoria">Categoria</label>

                <select 
                  id="categoria"
                  value={categoria}
                  onChange={ e =>setCategoria(e.target.value)}
                >
                <option value="">--Seleccione--</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripcones">Suscripcones</option>
                </select>
            </div>  

            <input
                type="submit"
                value="ADD"
            />
                
        </form>
    </div>
  )
}

export default Modal
