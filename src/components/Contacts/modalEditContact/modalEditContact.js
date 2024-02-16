import React, { useState } from 'react';
import './modalEditContact.scss';

function ModalEditContact({ isOpen, onClose, contact }) {
  const [editedContact, setEditedContact] = useState(contact ? { ...contact } : {});
  const [changesMade, setChangesMade] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEditedContact((prevContact) => ({
      ...prevContact,
      [id]: value,
    }));
    setChangesMade(true);
  };

  const handleSave = () => {
    // Lógica para guardar los cambios
    console.log('Guardando cambios:', editedContact);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-edit">
      <div className="modal-content-edit">
        <div className='modal-header-edit'>
          <button className="close-button-edit" onClick={onClose}>&larr;</button>
          <h2>Editar contacto</h2>
        </div>
        <div className="form-container-edit">
          <div className="form-group-edit">
            <label htmlFor="documentType">Tipo de documento:</label>
            <input type="text" id="documentType" value={editedContact?.documentType || contact?.documentType || ''} onChange={handleChange} />
          </div>
          <div className="form-group-edit">
            <label htmlFor="identification">Identificación:</label>
            <input type="text" id="identification" value={editedContact?.identification || contact?.identification || ''} onChange={handleChange} />
          </div>
          <div className="form-group-edit">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" value={editedContact?.name || contact?.name || ''} onChange={handleChange} />
          </div>
          <div className="form-group-edit">
            <label htmlFor="phone">Teléfono:</label>
            <input type="text" id="phone" value={editedContact?.phone || contact?.phone || ''} onChange={handleChange} />
          </div>
          <div className="form-group-edit">
            <label htmlFor="country">País:</label>
            <input type="text" id="country" value={editedContact?.country || contact?.country || ''} onChange={handleChange} />
          </div>
          <div className="form-group-edit">
            <label htmlFor="department">Departamento:</label> {/* Nuevo campo */}
            <input type="text" id="department" value={editedContact?.department || contact?.department || ''} onChange={handleChange} /> {/* Agregado */}
          </div>
          <div className="form-group-edit">
            <label htmlFor="city">Ciudad:</label>
            <input type="text" id="city" value={editedContact?.city || contact?.city || ''} onChange={handleChange} />
          </div>
          <div className="form-group-edit">
            <label htmlFor="code">Código:</label> {/* Nuevo campo */}
            <input type="text" id="code" value={editedContact?.code || contact?.code || ''} onChange={handleChange} /> {/* Agregado */}
          </div>
        </div>
        <button className="save-button-edit" onClick={handleSave} disabled={!changesMade}>Guardar cambios</button>
      </div>
    </div>
  );
}

export default ModalEditContact;
