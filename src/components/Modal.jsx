import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {


    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 1000);
      
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

        <form className={`formulario ${animarModal ? "animar" :'cerrar'}`}>
            <legend>Nuevo Gasto</legend>
            {/* first div */}
            <div className="campo">
                <label htmlFor="nombre">Nombre de Gasto</label>
                <input
                   id="nombre"
                   type="text"
                   placeholder="Anade el nombre del gasto"
                />
            </div>
             {/* first div */}
             <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input
                   id="cantidad"
                   type="number"
                   placeholder="Anade la cantidad  del gasto"
                />
            </div>
             {/* first div */}
             <div className="campo">
                <label htmlFor="categoria">Categoria</label>

                <select 
                  id="categoria"
                >
                <option value="">--Seleccione--</option>
                <option value="Ahorro">Ahorro</option>
                <option value="Comida">Comida</option>
                <option value="Casa">Casa</option>
                <option value="Gastos">Gastos</option>
                <option value="Ocio">Ocio</option>
                <option value="Salud">Salud</option>
                <option value="Suscripcones">Suscripcones</option>
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
