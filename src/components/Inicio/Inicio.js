import React from 'react';
import { Link } from 'react-router-dom';
import contactos from '../../assets/images/contactos.png';
import Plantillas from '../../assets/images/Plantillas.png'
import campañas from '../../assets/images/campañas.png'
import './Inicio.scss';

const Inicio = () => {
    return (
        <div className="inicio-container">
            <div className="cuadroContacts">
                <Link to="/contacts">
                    <img src={contactos} alt="contactos" className='contactos' />
                </Link>
            </div>

            <div className="cuadroCampaing">
                <Link to="/templates">
                    <img src={Plantillas} alt="Plantillas" className='Plantillas' />
                </Link>
            </div>
            
            <div className="cuadroTemplate">
                <Link to="/campaigns">
                    <img src={campañas} alt="campañas" className='campañas' />
                </Link>
            </div>
        </div>
    );
};

export default Inicio;
