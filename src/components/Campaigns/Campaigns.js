import React, { useState } from "react";
import "./Campaigns.scss";
import ModalCreateCampaign from "./modalCreateCampaign/modalCreateCampaign";
import ModalCampaignDetail from "./modalCampaignDetail/modalCampaignDetail";

function Campaigns() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null); // Definir el estado selectedCampaign

  // Datos de ejemplo de campañas
  const campaignsData = [
    {
      name: "Campaña 1",
      date: "2024-02-13",
      total: 100,
      pending: 20,
      sent: 80,
      failure: 5,
    },
    {
      name: "Campaña 2",
      date: "2024-02-14",
      total: 150,
      pending: 50,
      sent: 100,
      failure: 10,
    },
    {
      name: "Campaña 3",
      date: "2024-02-13",
      total: 100,
      pending: 20,
      sent: 80,
      failure: 5,
    },
    {
      name: "Campaña 4",
      date: "2024-02-14",
      total: 150,
      pending: 50,
      sent: 100,
      failure: 10,
    },
  ];

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function openDetailModal(campaign) {
    setSelectedCampaign(campaign); // Actualizar selectedCampaign cuando se abre el modal de detalles
    setIsDetailModalOpen(true);
  }

  function closeDetailModal() {
    setIsDetailModalOpen(false);
  }

  return (
    <div className="campaigns-container">
      <div className="campaigns-section">
        <div className="campaigns-header">
          <h2>Campañas</h2>
          <button className="create-campaign-button" onClick={openModal}>
            Crear campaña
          </button>
        </div>
        <div className="section-title">Filtrar por fecha</div>
        <div className="date-filter">
          <div className="date-filter-input">
            <label htmlFor="fromDate">Desde:</label>
            <input type="date" id="fromDate" />
          </div>
          <div className="date-filter-input">
            <label htmlFor="toDate">Hasta:</label>
            <input type="date" id="toDate" />
          </div>
          <button className="filter-button">Filtrar y buscar</button>
        </div>
        <table className="campaigns-table">
          <thead>
            <tr>
              <th className="blue-background-campaign">Campaña</th>
              <th className="blue-background">Fecha</th>
              <th className="blue-background">Total</th>
              <th className="blue-background">Pendiente</th>
              <th className="blue-background">Envío</th>
              <th className="blue-background">Fallo</th>
              <th className="blue-background-details">Detalles</th>
            </tr>
          </thead>
          <tbody>
            {campaignsData.map((campaign, index) => (
              <tr key={index}>
                <td>{campaign.name}</td>
                <td>{campaign.date}</td>
                <td>{campaign.total}</td>
                <td>{campaign.pending}</td>
                <td>{campaign.sent}</td>
                <td>{campaign.failure}</td>
                <td>
                  <button
                    className="details-button-contacts"
                    onClick={() => openDetailModal(campaign)}
                  >
                    Detalles
                  </button>
                  <button className="excel-button-contacts">Excel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModalCreateCampaign isOpen={isModalOpen} onClose={closeModal} />
      <ModalCampaignDetail
        isOpen={isDetailModalOpen}
        onClose={closeDetailModal}
        campaign={selectedCampaign}
      />
    </div>
  );
}

export default Campaigns;
