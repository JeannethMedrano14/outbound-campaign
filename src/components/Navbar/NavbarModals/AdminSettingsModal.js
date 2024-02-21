import React, { useState } from "react";
import "./AdminSettingsModal.scss";

const AdminSettingsModal = ({ isOpen, onClose }) => {
  const [admins, setAdmins] = useState([
    { id: 1, name: "Admin 1", username: "admin1", creationDate: "2024-02-20" },
    { id: 2, name: "Admin 2", username: "admin2", creationDate: "2024-02-21" },
    { id: 3, name: "Admin 3", username: "admin3", creationDate: "2024-02-22" },
  ]);

  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const handleDetailsClick = (admin) => {
    setSelectedAdmin(admin === selectedAdmin ? null : admin);
  };

  const handleCreateAdminClick = () => {
    console.log("Crear nuevo administrador");
  };

  if (!isOpen) return null;

  return (
    <div className="admin-settings-modal-background">
      <div className="admin-settings-modal-content">
        <div className="admin-settings-modal-header">
          <button className="close-button-admin-settings-modal" onClick={onClose}>
            &larr;
          </button>
          <h2>Configuración de Administradores</h2>
        </div>     
        <div className="admin-list">
          <div className="admin-settings-modal-container">
            <h3>Lista de Administradores</h3>
            <ul>
              {admins.map((admin) => (
                <li key={admin.id}>
                  <span>{admin.name}</span>
                  <button className="button-admin-settings-modal button-admin-details" onClick={() => handleDetailsClick(admin)}>
                    Detalles
                  </button>
                  {selectedAdmin === admin && (
                    <div className="admin-details">
                      <h3>Detalles del Administrador</h3>
                      <p>
                        <strong>Nombre:</strong> {admin.name}
                      </p>
                      <p>
                        <strong>Nombre de Usuario:</strong> {admin.username}
                      </p>
                      <p>
                        <strong>Fecha de Creación:</strong> {admin.creationDate}
                      </p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <button className="button-admin-settings-modal" onClick={handleCreateAdminClick}>
            Crear Nuevo Administrador
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsModal;
