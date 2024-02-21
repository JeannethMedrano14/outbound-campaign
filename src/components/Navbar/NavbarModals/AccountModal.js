import React, { useState } from 'react';
import "./AccountModal.scss"

const AccountModal = ({ isOpen, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [companyName, setCompanyName] = useState('Ejemplo Corp');
  const [companyType, setCompanyType] = useState('Tipo de Compañía');
  const [email, setEmail] = useState('correo@ejemplo.com');
  const [selectedProject, setSelectedProject] = useState('');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleProjectChange = (e) => {
    setSelectedProject(e.target.value);
  };

  if (!isOpen) return null;

  return (
    <div className="account-modal-background">
     <div className='account-modal-content'>
      <div className='account-modal-header'>
      <button className="close-button-account-modal" onClick={onClose}>
            &larr;
          </button>
      <h2>Datos de la Cuenta</h2>
      </div>
    <div className='account-modal-container'>
      <p>Nombre de la Compañía: {companyName}</p>
      <p>Tipo de Compañía: {companyType}</p>
      <p>Correo: {email}</p>
      {isEditing ? (
        <div>
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          <input type="text" value={companyType} onChange={(e) => setCompanyType(e.target.value)} />
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className="button-account-modal" onClick={handleSaveClick}>Guardar</button>
        </div>
      ) : (
        <button className="button-account-modal" onClick={handleEditClick}>Editar</button>
      )}
      {isEditing && (
        <div>
          <h3>Seleccione un Proyecto</h3>
          <select value={selectedProject} onChange={handleProjectChange}>
            <option value="">Seleccione...</option>
          </select>
        </div>
      )}
    </div>
     </div>
    </div>
  );
};

export default AccountModal;
