import React, { useState } from "react";
import "./BillingDataModal.scss";

const BillingDataModal = ({ isOpen, onClose }) => {
  const initialBillingData = {
    documentType: "cc",
    documentNumber: "12345678",
    firstName: "Juan",
    lastName: "Torres",
    email: "juant@example.com",
    address: "Calle 100",
    phone: "123-456-7890",
  };

  const [billingData, setBillingData] = useState(initialBillingData);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    console.log("Datos de facturación actualizados:", billingData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingData({ ...billingData, [name]: value });
  };

  if (!isOpen) return null;

  return (
    <div className="billing-modal-background">
      <div className="billing-modal-content">
        <div className="billing-modal-container">
          <div className="billing-modal-header">
          <button className="close-button-billing-modal" onClick={onClose}>
            &larr;
          </button>
            <h2>Datos de Facturación</h2>
          </div>{" "}
          <div>
            <p>
              <strong>Tipo de Documento:</strong> {billingData.documentType}
            </p>
            <p>
              <strong>Número de Documento:</strong> {billingData.documentNumber}
            </p>
            <p>
              <strong>Nombres:</strong> {billingData.firstName}
            </p>
            <p>
              <strong>Apellidos:</strong> {billingData.lastName}
            </p>
            <p>
              <strong>Correo Electrónico:</strong> {billingData.email}
            </p>
            <p>
              <strong>Dirección:</strong> {billingData.address}
            </p>
            <p>
              <strong>Teléfono:</strong> {billingData.phone}
            </p>
          </div>
          {isEditing ? (
            <div>
              <input
                type="text"
                name="documentType"
                value={billingData.documentType}
                onChange={handleChange}
              />
              <input
                type="text"
                name="documentNumber"
                value={billingData.documentNumber}
                onChange={handleChange}
              />
              <input
                type="text"
                name="firstName"
                value={billingData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                value={billingData.lastName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                value={billingData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                value={billingData.address}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                value={billingData.phone}
                onChange={handleChange}
              />
              <button className="button-Billing-modal" onClick={handleSaveClick}>Guardar</button>
            </div>
          ) : (
            <button className="button-Billing-modal" onClick={handleEditClick}>Editar</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillingDataModal;
