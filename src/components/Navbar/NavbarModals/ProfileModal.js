import React, { useState } from 'react';
import './ProfileModal.scss';

const ProfileModal = ({ isOpen, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Juan');
  const [lastName, setLastName] = useState('Torres');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  if (!isOpen) return null;

  return (
    <div className="profile-modal-background">
      <div className="profile-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="profile-modal-header">
          <button className="close-button-profile-modal" onClick={onClose}>
            &larr;
          </button>
          <h2>Información del Perfil</h2>
        </div>
        <div className='profile-modal-container'>
          <p>Nombre: {firstName}</p>
          <p>Apellido: {lastName}</p>
          {isEditing ? (
            <div>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              <button className="button-profile-modal" onClick={handleSaveClick}>Guardar</button>
            </div>
          ) : (
            <button className="button-profile-modal" onClick={handleEditClick}>Editar</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
