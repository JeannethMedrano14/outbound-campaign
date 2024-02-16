import React, { useState } from 'react';
import './modalCreateCampaign.scss';
import imagen from '../../../assets/images/promo.jpg'

function ModalCreateCampaign({ isOpen, onClose }) {
  const [filter, setFilter] = useState('');
  // const [selectedTemplate, setSelectedTemplate] = useState(null);

  const templates = [
    // plantillas ejemplo
    {
      id: 1,
      title: "Plantilla_1",
      message: "¡No te pierdas nuestras ofertas! Descuentos en una amplia selección de productos.",
      type: "Texto",
      status: "Activa",
      idGupshup: "plantilla_1",
      creationDate: "2024-02-15"
    },
    {
      id: 2,
      title: "Plantilla_2",
      message: "Solo por hoy, obtén un 20% de descuento en todos los productos de nuestra tienda en línea.",
      type: "Imagen",
      status: "Activa",
      idGupshup: "plantilla_2",
      creationDate: "2024-02-10",
      imageUrl: imagen
    },
    {
      id: 3,
      title: "Plantilla_3",
      message: "¡No te pierdas nuestras ofertas! Descuentos en una amplia selección de productos.",
      type: "Texto",
      status: "Inactiva",
      idGupshup: "plantilla_3",
      creationDate: "2024-01-25",
      // imageUrl: imagen
    },
    {
      id: 4,
      title: "Plantilla_4",
      message: "Solo por hoy, obtén un 20% de descuento en todos los productos de nuestra tienda en línea.",
      type: "Texto",
      status: "Activa",
      idGupshup: "plantilla_4",
      creationDate: "2024-01-20"
    }
  ];

  if (!isOpen) {
    return null;
  }

  const filteredTemplates = templates.filter(template =>
    template.title.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSelectTemplate = (template) => {
    // setSelectedTemplate(template);
    onClose();
  };

  return (
    <div className="modal-create-campaign">
        <div className='modal-header-create-campaign'>
          <button className="close-button-create-campaign" onClick={onClose}>&larr;</button>
          <h2>Crear campaña</h2>
        </div>
      <div className="modal-content-create-campaign">
        <div>
        <h2>Seleccionar plantilla</h2>
        <div className='search-container-template'>
          <input
          className='input-filter-template'
            type="text"
            placeholder="Buscar por título"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
          <button className="clear-filter-campaign" onClick={() => setFilter('')}>
          <span>Limpiar</span> filtro
          </button>
        </div>
        </div>
        <div className="form-container-create-campaign">
          {filteredTemplates.map(template => (
            <div key={template.id} className="template-item">
              <h3>{template.title}</h3>
              {template.imageUrl && (
    <img src={template.imageUrl} alt="Descripción de la imagen" />
  )}              <p>{template.message}</p>
              <p>Tipo: {template.type}</p>
              <p>Estado: {template.status}</p>
              <p>ID de Gupshup: {template.idGupshup}</p>
              <p>Fecha de creación: {template.creationDate}</p>
              <button className="select-template-button" onClick={() => handleSelectTemplate(template)}>Seleccionar plantilla</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModalCreateCampaign;
