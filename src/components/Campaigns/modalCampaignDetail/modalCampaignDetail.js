import React, { useState } from "react";
import "./modalCampaignDetail.scss";
import Chart from "./modalCampaignDetailChart";

function ModalCampaignDetail({ isOpen, onClose, campaign }) {
  const [view, setView] = useState("table");

  if (!isOpen) return null;

  const calculatePercentage = (part, total) => {
    return (part / total) * 100;
  };

  const total = campaign.total;
  const pendingPercentage = calculatePercentage(campaign.pending, total);
  const sentPercentage = calculatePercentage(campaign.sent, total);
  const failurePercentage = calculatePercentage(campaign.failure, total);

  const toggleView = () => {
    setView(view === "table" ? "chart" : "table");
  };

  return (
    <div className="modal-detail-campaign">
      <div className="modal-content-detail-campaign">
        <div className="modal-header-detail-campaign">
          <button className="close-button-detail-campaign" onClick={onClose}>
            &larr;
          </button>
          <h2>Detalles de campaña</h2>
        </div>
        <div className="item-detail-campaign">
          <h2>{campaign.name}</h2>
          {view === "table" ? (
            <table className="modal-campaign-table">
              <tbody>
                <tr className="total">
                  <td>Total Enviados:</td>
                  <td>{campaign.total}</td>
                  <td>{100}%</td>
                </tr>
                <tr className="odd">
                  <td>Entregados:</td>
                  <td>{campaign.pending}</td>
                  <td>{pendingPercentage.toFixed(2)}%</td>
                </tr>
                <tr className="even">
                  <td>Leídos:</td>
                  <td>{campaign.sent}</td>
                  <td>{sentPercentage.toFixed(2)}%</td>
                </tr>
                <tr className="odd">
                  <td>No entregados:</td>
                  <td>{campaign.failure}</td>
                  <td>{failurePercentage.toFixed(2)}%</td>
                </tr>
                <tr className="even">
                  <td>Fallidos:</td>
                  <td>{campaign.sent}</td>
                  <td>{sentPercentage.toFixed(2)}%</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <Chart campaign={campaign} />
          )}
        </div>
        <button className="button-table-chart" onClick={toggleView}>
          Ver {view === "table" ? "gráfico" : "tabla"}
        </button>
      </div>
    </div>
  );
}

export default ModalCampaignDetail;
