import React from 'react';
import './Contacts.scss';

function Contacts() {
  return (
    <div className="contacts-container">
       <div className="contacts-section">
      <div className="header">
        <h2>Contactos</h2>
        <button className="add-button">Agregar nuevo contacto</button>
        <div className="search-icon">🔍</div>
      </div>
      {/* Aquí iría el contenido de la sección de contactos */}
    </div>
    </div>
  );
}

export default Contacts;
