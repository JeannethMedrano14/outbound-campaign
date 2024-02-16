import React from 'react';
import './modalCreateContact.scss';

function modalCreateContact({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-create">
    <div className="modal-content-create">
     <div className='modal-header-create'>
     <button className="close-button-create" onClick={onClose}>&larr;</button>
      <h2>Crear contacto</h2>
     </div>
      <div className="form-container-create">
        
        <div className="form-group-create">
          <label htmlFor="documentType">Tipo de documento:</label>
          <input className='input' type="text" id="documentType" />
        </div>
        <div className="form-group-create">
          <label htmlFor="identification">Identificación:</label>
          <input className='input' type="text" id="identification" />
        </div>
        <div className="form-group-create">
          <label htmlFor="name">Nombre:</label>
          <input className='input' type="text" id="name" />
        </div>
        <div className="form-group-create">
          <label htmlFor="phone">Teléfono:</label>
          <input className='input' type="text" id="phone" />
        </div>
        <div className="form-group-create">
          <label htmlFor="country">País:</label>
          <input className='input' type="text" id="country" />
        </div>
        <div className="form-group-create">
          <label htmlFor="department">Departamento:</label> {/* Nuevo campo */}
          <input className='input' type="text" id="department" />
        </div>
        <div className="form-group-create">
          <label htmlFor="city">Ciudad:</label>
          <input className='input' type="text" id="city" />
        </div>
        <div className="form-group-create">
          <label htmlFor="code">Código:</label> {/* Nuevo campo */}
          <input className='input' type="text" id="code" />
        </div>
      </div>
      <button className="save-button-create">Guardar</button>
    </div>
  </div>
);
}

export default modalCreateContact;
