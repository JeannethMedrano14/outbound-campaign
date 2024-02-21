import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import FunnelChart from "./HomeCharts/FunnelChart";
import HorizontalBarChart from "./HomeCharts/HorizontalBarChart";
import BarChart from "./HomeCharts/BarChart";
import ModalCreateCampaign from "../Campaigns/modalCreateCampaign/modalCreateCampaign";
import { Link } from "react-router-dom";


import "./Inicio.scss";

const Inicio = () => {
  const datosEjemplo = {
    totalMensajes: 1000,
    mensajesEntregados: 800,
    mensajesLeidos: 600,
    mensajesNoEntregados: 80,
    porcentajeEntregados: (800 / 1000) * 100,
    porcentajeLeidos: (600 / 1000) * 100,
    porcentajeNoEntregados: (80 / 1000) * 100,
  };

  const [ultimaCampaña, setUltimaCampaña] = useState({
    name: "Campaña_1",
    date: "2024-02-13",
    pending: 20,
    sent: 80,
    failure: 5,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  
  useEffect(() => {
    
  }, []);

  return (
    <div className="startup-container">
      <div className="home-container">
        <div className="time-filter">
          <label htmlFor="intervalo">Intervalo de tiempo: </label>
          <select id="intervalo">
            <option value="ultimoMes">Último mes</option>
            <option value="ultimaSemana">Última semana</option>
            <option value="ultimoDia">Último día</option>
          </select>
        </div>

        <div className="first-row">
          <p>Datos campañas</p>
          <p>
            Total de Mensajes:{" "}
            <span className="total">{datosEjemplo.totalMensajes}</span>
          </p>
          <p>
            Mensajes Entregados:{" "}
            <span className="percentage-delivered">
              {datosEjemplo.porcentajeEntregados.toFixed(0)}%
            </span>
          </p>
          <p>
            Mensajes Leídos:{" "}
            <span className="percentage-read">
              {datosEjemplo.porcentajeLeidos.toFixed(0)}%
            </span>
          </p>
          <p>
            Mensajes no Entregados:{" "}
            <span className="percentage-undelivered">
              {datosEjemplo.porcentajeNoEntregados.toFixed(0)}%
            </span>
          </p>
        </div>

        <div className="charts-container">
          <FunnelChart />
          <HorizontalBarChart />
          <BarChart />
        </div>

        <div className="cards-container">
          <div className="rectangle">
            <p>
              Última campaña enviada:
            </p>
            <p className="campaign-info">
              <strong>{ultimaCampaña.name}</strong> / {ultimaCampaña.date}
            </p>
            <div className="campaign-list">
              <ul>
                <li>
                  <strong>Pendientes:</strong> {ultimaCampaña.pending}
                </li>
                <li>
                  <strong>Enviados:</strong> {ultimaCampaña.sent}
                </li>
                <li>
                  <strong>Fallidos:</strong> {ultimaCampaña.failure}
                </li>
              </ul>
            </div>
          </div>

          <div
            className="rectangle-icon"
            onClick={openModal}
          >
            <div className="icon-file-circle">
              <FontAwesomeIcon icon={faFileAlt} size="2x" />
            </div>
            <p className="card-titulo">Crear campañas</p>
            <p>
              Inicia tus campañas en un instante utilizando nuestras
              herramientas intuitivas.
            </p>
          </div>
          <Link to="/CreateTemplate" className="rectangle-icon link-template" >
          <div>
            <div className="icon-bull-circle">
              <FontAwesomeIcon icon={faBullhorn} size="2x" />
            </div>
            <p className="card-titulo">Crear plantillas</p>
            <p>
              Diseña mensajes y simplifica el proceso de comunicación al crear
              modelos reutilizables.
            </p>
          </div>
          </Link>
        </div>
      </div>
      <ModalCreateCampaign isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Inicio;
