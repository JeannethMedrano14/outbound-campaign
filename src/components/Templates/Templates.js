import React, { useState } from 'react';
import './Templates.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Templates() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleRowClick = (index) => {
    let newSelectedRows = [...selectedRows];
    if (newSelectedRows.includes(index)) {
      newSelectedRows = newSelectedRows.filter((row) => row !== index);
    } else {
      newSelectedRows.push(index);
    }
    setSelectedRows(newSelectedRows);
  };



  const handleDeleteButtonClick = () => {
    setShowModal(true);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    setShowModal(false);
    setSelectedRows([]);
  };

  return (
    <div className='containerPrincipal'>
      <div className="templates-container">
        <div className="header">
          <div className="tab">Plantillas</div>
          <div className="create-button">Crear Plantilla</div>
        </div>
        <div className="content">
          <div className="filter-wrapper">
            <h2>Filtrar por título</h2>
            <input type="text" placeholder="Ingrese el título" className='input' />
            <button className='buttonFiltrar'>Filtrar y Buscar</button>
          </div>
          <div className='containerbtn'>
            <button className='btneliminar' onClick={handleDeleteButtonClick}>Eliminar</button>
            <button className='btneditar'>Editar</button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Title</th>
                <th>Type</th>
                <th>Message</th>
                <th>Category</th>
                <th>Status</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={() => handleRowClick(1)} className={selectedRows.includes(1) ? 'selected' : ''}>
                <td><input type="checkbox" checked={selectedRows.includes(1)} onChange={() => { }} /></td>
                <td>Ejemplo de título</td>
                <td>Ejemplo de tipo</td>
                <td>Ejemplo de mensaje</td>
                <td>Ejemplo de categoría</td>
                <td>
                  <div className="status-circle">
                    <span className="check-mark">&#10003;</span>
                  </div>
                </td>
                <td>
                  <span className="preview-icon">&#128065;</span>
                </td>
              </tr>
              <tr onClick={() => handleRowClick(0)} className={selectedRows.includes(0) ? 'selected' : ''}>
                <td><input type="checkbox" checked={selectedRows.includes(0)} onChange={() => { }} /></td>
                <td>Ejemplo de título</td>
                <td>Ejemplo de tipo</td>
                <td>Ejemplo de mensaje</td>
                <td>Ejemplo de categoría</td>
                <td>
                  <div className="status-circle-equis">
                    <span className="check-Equis">&#10007;</span>
                  </div>
                </td>
                <td>
                  <span className="preview-icon">&#128065;</span>
                </td>
              </tr>
              <tr onClick={() => handleRowClick(0)} className={selectedRows.includes(0) ? 'selected' : ''}>
                <td><input type="checkbox" checked={selectedRows.includes(0)} onChange={() => { }} /></td>
                <td>Ejemplo de título</td>
                <td>Ejemplo de tipo</td>
                <td>Ejemplo de mensaje</td>
                <td>Ejemplo de categoría</td>
                <td>
                  <div className="status-circle-equis">
                    <span className="check-Equis">&#10007;</span>
                  </div>
                </td>
                <td>
                  <span className="preview-icon">&#128065;</span>
                </td>
              </tr>
              <tr onClick={() => handleRowClick(0)} className={selectedRows.includes(0) ? 'selected' : ''}>
                <td><input type="checkbox" checked={selectedRows.includes(0)} onChange={() => { }} /></td>
                <td>Ejemplo de título</td>
                <td>Ejemplo de tipo</td>
                <td>Ejemplo de mensaje</td>
                <td>Ejemplo de categoría</td>
                <td>
                  <div className="status-circle-equis">
                    <span className="check-Equis">&#10007;</span>
                  </div>
                </td>
                <td>
                  <span className="preview-icon">&#128065;</span>
                </td>
              </tr>
              <tr onClick={() => handleRowClick(0)} className={selectedRows.includes(0) ? 'selected' : ''}>
                <td><input type="checkbox" checked={selectedRows.includes(0)} onChange={() => { }} /></td>
                <td>Ejemplo de título</td>
                <td>Ejemplo de tipo</td>
                <td>Ejemplo de mensaje</td>
                <td>Ejemplo de categoría</td>
                <td>
                  <div className="status-circle-equis">
                    <span className="check-Equis">&#10007;</span>
                  </div>
                </td>
                <td>
                  <span className="preview-icon">&#128065;</span>
                </td>
              </tr>
              <tr onClick={() => handleRowClick(0)} className={selectedRows.includes(0) ? 'selected' : ''}>
                <td><input type="checkbox" checked={selectedRows.includes(0)} onChange={() => { }} /></td>
                <td>Ejemplo de título</td>
                <td>Ejemplo de tipo</td>
                <td>Ejemplo de mensaje</td>
                <td>Ejemplo de categoría</td>
                <td>
                  <div className="status-circle-equis">
                    <span className="check-Equis">&#10007;</span>
                  </div>
                </td>
                <td>
                  <span className="preview-icon">&#128065;</span>
                </td>
              </tr>
              <tr onClick={() => handleRowClick(0)} className={selectedRows.includes(0) ? 'selected' : ''}>
                <td><input type="checkbox" checked={selectedRows.includes(0)} onChange={() => { }} /></td>
                <td>Ejemplo de título</td>
                <td>Ejemplo de tipo</td>
                <td>Ejemplo de mensaje</td>
                <td>Ejemplo de categoría</td>
                <td>
                  <div className="status-circle-equis">
                    <span className="check-Equis">&#10007;</span>
                  </div>
                </td>
                <td>
                  <span className="preview-icon">&#128065;</span>
                </td>
              </tr>
              <tr onClick={() => handleRowClick(0)} className={selectedRows.includes(0) ? 'selected' : ''}>
                <td><input type="checkbox" checked={selectedRows.includes(0)} onChange={() => { }} /></td>
                <td>Ejemplo de título</td>
                <td>Ejemplo de tipo</td>
                <td>Ejemplo de mensaje</td>
                <td>Ejemplo de categoría</td>
                <td>
                  <div className="status-circle-equis">
                    <span className="check-Equis">&#10007;</span>
                  </div>
                </td>
                <td>
                  <span className="preview-icon">&#128065;</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" style={{ color: "#f45d5d", }} />
              <span>Eliminar Template</span>
              <p>¿Seguro que deseas eliminar template?</p>
              <button onClick={handleCancelDelete}>Cancelar</button>
              <button onClick={handleConfirmDelete}>Eliminar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Templates;
