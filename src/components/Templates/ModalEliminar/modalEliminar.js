import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './modalEliminar.scss'; 

function ModalEliminar({ showModal, handleCancelDelete, handleConfirmDelete }) {
  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modalEliminar">
        <FontAwesomeIcon icon={faExclamationTriangle} className="icono" style={{ color: '#FF5733' }} />
        <strong className='titlemodal'>Eliminar Template</strong>
        <p>¿Seguro que deseas eliminar template?</p>
        <button onClick={handleCancelDelete} className='btnaceptar'>Aceptar</button>
        <button onClick={handleConfirmDelete} className='btncancelar'>Cancelar</button>
      </div>
    </div>
  );
}

export default ModalEliminar;
