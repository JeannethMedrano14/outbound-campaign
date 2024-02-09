import React, { useState } from 'react';
import ModalCreateContact from './modalCreateContact/modalCreateContact';
import './Contacts.scss';
import avatar1 from '../../assets/images/avatar1.jpg';//ej
import avatar2 from '../../assets/images/avatar2.jpg'; //ej

function Contacts() {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedContacts, setSelectedContacts] = useState(new Set());
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Datos de ejemplo
    const contactsData = [
      { id: 1, name: 'Juan Pérez', avatar: avatar1, documentType: 'CC', identification: '123456789', date: '2024-02-10', phone: '1234567890', country: 'Colombia', city: 'Bogotá', code: '+57' },
      { id: 2, name: 'María López', avatar: avatar2, documentType: 'NIT', identification: '987654321', date: '2024-02-11', phone: '9876543210', country: 'México', city: 'México', code: '+52' },
      { id: 3, name: 'Juan Pérez', avatar: avatar1, documentType: 'CC', identification: '123456789', date: '2024-02-10', phone: '1234567890', country: 'Colombia', city: 'Bogotá', code: '+57' },
      { id: 4, name: 'María López', avatar: avatar2, documentType: 'NIT', identification: '987654321', date: '2024-02-11', phone: '9876543210', country: 'México', city: 'México', code: '+52' },
    ];

    function handleSelectAllContacts(event) {
      const isChecked = event.target.checked;
      setSelectAll(isChecked);
      if (isChecked) {
        const newSelectedContacts = new Set(contactsData.map(contact => contact.id));
        setSelectedContacts(newSelectedContacts);
      } else {
        setSelectedContacts(new Set());
      }
    }

    function handleSelectContact(id) {
      const newSelectedContacts = new Set(selectedContacts);
      if (selectedContacts.has(id)) {
        newSelectedContacts.delete(id);
      } else {
        newSelectedContacts.add(id);
      }
      setSelectedContacts(newSelectedContacts);
    }
    
    function handleDeleteSelection() {
      // Lógica para eliminar contactos seleccionados
    }

    function handleSearchChange(event) {
      setSearchTerm(event.target.value);
    }
  
    // const filteredContacts = contactsData.filter(contact =>
    //   contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <div className="contacts-container">
       <div className="contacts-section">
      <div className="header">
        <h2>Contactos</h2>
        <input className='buscarcontactos'
            type="text"
            placeholder="Buscar contactos"
            value={searchTerm}
            onChange={handleSearchChange}
          />
      </div>
      <div className="button-container">
          <button className="custom-button button-1" onClick={openModal}>Crear contacto</button>
          <button className="custom-button button-2">Exportar contactos</button>
          <button className="custom-button button-3">Exportar contactos buscados</button>
          <button className="custom-button button-4">Importar contactos archivo plano</button>
          <button className="custom-button button-5">Actualizar contactos archivo plano</button>
        </div>
        <table className="contacts-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" onChange={handleSelectAllContacts} checked={selectAll} />
              </th>
              <th>Display</th>
              <th>Tipo</th>
              <th>Identificación</th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Teléfono</th>
              <th>País</th>
              <th>Ciudad</th>
              <th>Código</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contactsData.map(contact => (
              <tr key={contact.id}>
                <td>
                  <input type="checkbox" checked={selectedContacts.has(contact.id)} onChange={() => handleSelectContact(contact.id)} />
                </td>
                <td>
                  <img src={contact.avatar} alt="Avatar" className="avatar" /> {/* Imagen de avatar */}
                </td>
                <td>{contact.documentType}</td>
                <td>{contact.identification}</td>
                <td>{contact.name}</td>
                <td>{contact.date}</td>
                <td>{contact.phone}</td>
                <td>{contact.country}</td>
                <td>{contact.city}</td>
                <td>{contact.code}</td>
                <td>
                  <button className="details-button">Detalles</button>
                  <button className="edit-button">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {/* Flechas avanzar/retroceder */}
        </div>
        <button className="delete-selection-button" onClick={handleDeleteSelection}>
          <span className="delete-icon">&#128465;</span> Eliminar selección
        </button>
            </div>
            <ModalCreateContact isOpen={isModalOpen} onClose={closeModal} /> {/* Cambia el nombre aquí */}

    </div>
  );
}

export default Contacts;
