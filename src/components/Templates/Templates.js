import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Templates.scss';
import ModalEliminar from './ModalEliminar/modalEliminar';
import ModalEditar from './ModalEditar/modalEditar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos de FontAwesome

function Templates() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [showModalEliminar, setShowModalEliminar] = useState(false);
  const [showModalEditar, setShowModalEditar] = useState(false);
  const navigate = useNavigate();

  // Datos de ejemplo quemados
  const templateData = [
    {
      id: 1,
      title: 'Plantilla de ejemplo 1',
      type: 'Tipo 1',
      message: 'Mensaje de ejemplo 1',
      category: 'Categoría A',
      status: 'Activa'
    },
    {
      id: 2,
      title: 'Plantilla de ejemplo 2',
      type: 'Tipo 2',
      message: 'Mensaje de ejemplo 2',
      category: 'Categoría B',
      status: 'Rechazada'
    },
    {
      id: 3,
      title: 'Plantilla de ejemplo 3',
      type: 'Tipo 3',
      message: 'Mensaje de ejemplo 3',
      category: 'Categoría C',
      status: 'Pendiente'
    }
  ];

  const handleRowClick = (id) => {
    setSelectedRows(prevSelectedRows => {
      if (prevSelectedRows.includes(id)) {
        return prevSelectedRows.filter(row => row !== id);
      } else {
        return [...prevSelectedRows, id];
      }
    });
  };

  const handleDeleteButtonClick = () => {
    setShowModalEliminar(true);
  };

  const handleEditButtonClick = () => {
    setShowModalEditar(true);
  };

  const handleCreateTemplateButtonClick = () => {
    navigate('/createTemplate');
  };

  const handleCancelEliminar = () => {
    setShowModalEliminar(false);
  };

  const handleConfirmEliminar = () => {
    setShowModalEliminar(false);
    setSelectedRows([]);
  };

  const handleCancelEdit = () => {
    setShowModalEditar(false);
  };

  const handleConfirmEdit = () => {
    setShowModalEditar(false);
  };

  return (
    <div className='containerPrincipal'>
      <div className="templates-container">
        <div className="header">
          <div className="tab">Plantillas</div>
          <button className="create-button" onClick={handleCreateTemplateButtonClick}>
            Crear Plantilla
          </button>
        </div>
        <div className="content">
          <div className="filter-wrapper">
            <h2 className='titulo'>Filtrar por título</h2>
            <input type="text" placeholder="Ingrese el título" className='inputbuscar' />
            <button className='buttonFiltrar'>Filtrar y Buscar</button>
          </div>
          <div className="table-container">
            {templateData.map(template => (
              <div key={template.id} className={`template-item2 ${selectedRows.includes(template.id) ? 'selected' : ''}`} onClick={() => handleRowClick(template.id)}>
                <div className="template-info-box"> {/* Cuadro con borde redondeado y color de fondo gris */}
                  <input type="checkbox" checked={selectedRows.includes(template.id)} onChange={() => {}} />
                  <div className="template-info">
                    <h3 className="template-title">{template.title}</h3>
                    <p className="template-detail"><strong>Tipo:</strong> {template.type}</p>
                    <p className="template-detail"><strong>Mensaje:</strong> {template.message}</p>
                    <p className="template-detail"><strong>Categoría:</strong> {template.category}</p>
                    <p className="template-detail"><strong>Estado:</strong> {template.status} {' '}
                      {template.status === 'Activa' && <FontAwesomeIcon icon={faCheck} color="green" />} 
                      {template.status === 'Rechazada' && <FontAwesomeIcon icon={faTimes} color="red" />}
                      {template.status === 'Pendiente' && <FontAwesomeIcon icon={faSpinner} className="spinning" />}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="action-buttons">
          <button className='btneliminar' onClick={handleDeleteButtonClick}>Eliminar</button>
          <button className='btneditar' onClick={handleEditButtonClick}>Editar</button>
        </div>
      </div>
      <ModalEliminar
        showModal={showModalEliminar}
        handleCancelDelete={handleCancelEliminar}
        handleConfirmDelete={handleConfirmEliminar}
      />
      <ModalEditar
        showModal={showModalEditar}
        handleCancelEdit={handleCancelEdit}
        handleConfirmEdit={handleConfirmEdit}
      />
    </div>
  );
}

export default Templates;
