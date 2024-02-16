import React from 'react';
import './modalEditar.scss'; // Asegúrate de tener los estilos correctamente importados

function ModalEditar({ showModal, handleCancelEdit, handleConfirmEdit }) {
  if (!showModal) return null;

  return (
    <div className="modaloverlay">
      <div className="modalEditar">
        <h2 className='titlemodal'>Editar Template</h2>
        <div className="form-group">
          <label htmlFor="nombre" className='subtitle'>Nombre de la plantilla</label>
          <input type="text" id="nombre" placeholder="Ingrese el nombre de la plantilla" className='inputnomb'/>
        </div>
        <div className="form-group">
          <label htmlFor="contenido" className='subtitle'>Contenido del mensaje</label>
          <input type="text" id="contenido" placeholder="Ingrese el contenido del mensaje" className='inputcont' />
          <h5 className='guardarcmabios'>¿Desea guardar cambios?</h5>
        </div>
        <button onClick={handleCancelEdit} className='btnaceptaredit'>Aceptar</button>
        <button onClick={handleConfirmEdit} className='btncancelaredit'>Cancelar</button>
      </div>
    </div>
  );
}

export default ModalEditar;
