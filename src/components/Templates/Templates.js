import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Templates.scss';
import ModalEliminar from './ModalEliminar/modalEliminar';
import ModalEditar from './ModalEditar/modalEditar';

function Templates() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [showModalEliminar, setShowModalEliminar] = useState(false);
  const [showModalEditar, setShowModalEditar] = useState(false);

  const navigate = useNavigate();

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
          <div className='containerbtn'>
            <button className='btneliminar' onClick={handleDeleteButtonClick}>Eliminar</button>
            <button className='btneditar' onClick={handleEditButtonClick}>Editar</button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th className='th'><input type="checkbox" /></th>
                <th className='th'>Title</th>
                <th className='th'>Type</th>
                <th className='th'>Message</th>
                <th className='th'>Category</th>
                <th className='th'>Status</th>
                <th className='th'>Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={() => handleRowClick(1)} className={selectedRows.includes(1) ? 'selected' : ''}>
                <td className='td'><input type="checkbox" checked={selectedRows.includes(1)} onChange={() => { }} /></td>
                <td className='td'>Ejemplo de título</td>
                <td className='td'>Ejemplo de tipo</td>
                <td className='td'>Ejemplo de mensaje</td>
                <td className='td'>Ejemplo de categoría</td>
                <td className='td'>
                  <div className="status-circle">
                    <span className="check-mark">&#10003;</span>
                  </div>
                </td>
                <td className='td'>
                  <span className="preview-icon">&#128065;</span>
                </td>
              </tr>
              <tr onClick={() => handleRowClick(0)} className={selectedRows.includes(0) ? 'selected' : ''}>
                <td className='td'><input type="checkbox" checked={selectedRows.includes(0)} onChange={() => { }} /></td>
                <td className='td'>Ejemplo de título</td>
                <td className='td'> Ejemplo de tipo</td>
                <td className='td'>Ejemplo de mensaje</td>
                <td className='td'>Ejemplo de categoría</td>
                <td className='td'>
                  <div className="status-circle-equis">
                    <span className="check-Equis">&#10007;</span>
                  </div>
                </td>
                <td className='td'>
                  <span className="preview-icon">&#128065;</span>
                </td>
              </tr>
            </tbody>
          </table>
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
    </div>
  );
}

export default Templates;
