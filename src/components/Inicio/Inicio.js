import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBullhorn, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './Inicio.scss';

const Inicio = () => {
    return (
        <div className="inicio-container">
            <div className="cuadroContacts">
                <Link to="/contacts">
                    <FontAwesomeIcon icon={faAddressBook} className="iconContact" />
                    
                    <div>
                        <span className="textContactos">Contactos</span>
                    </div>
                </Link>

            </div>
            <div className="cuadroCampaing">
                <Link to="/campaigns">
                    <FontAwesomeIcon icon={faBullhorn} className="iconCampaing" />
                    <div>
                        <span className="textCampañas">Campañas</span>
                    </div>
                </Link>

            </div>
            <div className="cuadroTemplate">
                <Link to="/templates">
                    <FontAwesomeIcon icon={faFileAlt} className="iconTemplate" />
                    <div>
                        <span className="textPlantillas">Plantillas</span>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Inicio;
