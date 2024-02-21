import React from 'react';
import './modalContactDetail.scss';

function modalContactDetail({ isOpen, onClose, contact }) {
  if (!isOpen || !contact) {
    return null;
  }

  return (
    <div className="modal-detail">
      <div className="modal-content-detail">
        <div className='modal-header-detail'>
          <button className="close-button-detail" onClick={onClose}>&larr;</button>
          <h2 className='TitleModalContact'>Detalle del contacto</h2>
        </div>
        <div className="contact-info-container">
          {contact.avatar && (
            <img src={contact.avatar} alt="Avatar" className="contact-avatar" />
          )}
          <div className="form-container-detail">
            <div className="form-group-detail">
              <label>Tipo de documento:</label>
              <div className="info">{contact.documentType}</div>
            </div>
            <div className="form-group-detail">
              <label>Identificación:</label>
              <div className="info">{contact.identification}</div>
            </div>
            <div className="form-group-detail">
              <label>Nombre:</label>
              <div className="info">{contact.name}</div>
            </div>
            <div className="form-group-detail">
              <label>Fecha:</label>
              <div className="info">{contact.date}</div>
            </div>
            <div className="form-group-detail">
              <label>Teléfono:</label>
              <div className="info">{contact.phone}</div>
            </div>
            <div className="form-group-detail">
              <label>País:</label>
              <div className="info">{contact.country}</div>
            </div>
            <div className="form-group-detail">
              <label>Departamento:</label>
              <div className="info">{contact.department}</div>
            </div>
            <div className="form-group-detail">
              <label>Ciudad:</label>
              <div className="info">{contact.city}</div>
            </div>
            <div className="form-group-detail">
              <label>Código:</label>
              <div className="info">{contact.code}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default modalContactDetail;
