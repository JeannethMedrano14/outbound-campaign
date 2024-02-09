import React from 'react';
import './modalEditContact.scss';

function modalEditContact({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-edit">
    <div className="modal-content">
     <div className='modal-header'>
      <h2>Editar contacto</h2>
      <button className="close-button-edit" onClick={onClose}>&larr;</button>
     </div>
      <div className="form-container">
        
        <div className="form-group">
          <label htmlFor="documentType">Tipo de documento:</label>
          <input type="text" id="documentType" />
        </div>
        <div className="form-group">
          <label htmlFor="identification">Identificación:</label>
          <input type="text" id="identification" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input type="text" id="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="country">País:</label>
          <input type="text" id="country" />
        </div>
        <div className="form-group">
          <label htmlFor="city">Ciudad:</label>
          <input type="text" id="city" />
        </div>
      </div>
      <button className="save-button">Guardar</button>
    </div>
  </div>
);
}

export default modalEditContact;
