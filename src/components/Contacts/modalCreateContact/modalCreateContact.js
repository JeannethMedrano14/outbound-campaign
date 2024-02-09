import React from 'react';
import './modalCreateContact.scss';

function modalCreateContact({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
    <div className="modal-content">
     <div className='modal-header'>
      <h2>Crear contacto</h2>
     </div>
      <div className="form-container">
        
        <div className="form-group">
          <label htmlFor="documentType">Tipo de documento:</label>
          <input className='input' type="text" id="documentType" />
        </div>
        <div className="form-group">
          <label htmlFor="identification">Identificación:</label>
          <input className='input' type="text" id="identification" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input className='input' type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input className='input' type="text" id="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="country">País:</label>
          <input className='input' type="text" id="country" />
        </div>
        <div className="form-group">
          <label htmlFor="city">Ciudad:</label>
          <input className='input' type="text" id="city" />
        </div>
      </div>
      <button className="save-button">Guardar</button>
    </div>
  </div>
);
}

export default modalCreateContact;
