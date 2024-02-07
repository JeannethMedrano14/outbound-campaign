import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/images/logo.png";
import "./Navbar.scss"; 

const Navbar = () => {
  const location = useLocation(); 
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="links">
        <Link to="/contacts" className={location.pathname === '/contacts' ? 'active' : ''}>Contactos</Link>
        <Link to="/campaigns" className={location.pathname === '/campaigns' ? 'active' : ''}>Campañas</Link>
        <Link to="/templates" className={location.pathname === '/templates' ? 'active' : ''}>Plantillas</Link>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faCog} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </nav>
  );
};

export default Navbar;