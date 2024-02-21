import React, { useState } from 'react';
import "./ChangePasswordModal.scss"

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSaveClick = () => {
    if (newPassword !== confirmPassword) {
      alert('Las nuevas contraseñas no coinciden.');
      return;
    }

    console.log('Contraseña cambiada con éxito.');
  };

  if (!isOpen) return null;

  return (
    <div className="changepass-modal-background">
      <div className='changepass-modal-content'>
          <div className='changepass-modal-header'>
          <button className="close-button-changepass-modal" onClick={onClose}>
            &larr;
          </button>
          <h2>Cambiar Contraseña</h2>
          </div>
        <div className='changepass-modal-container'>
      <div>
        <label>Contraseña Actual:</label>
        <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
      </div>
      <div>
        <label>Nueva Contraseña:</label>
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </div>
      <div>
        <label>Confirmar Nueva Contraseña:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <button className='button-changepass-modal' onClick={handleSaveClick}>Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
