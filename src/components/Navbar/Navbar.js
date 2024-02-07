import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <div className="links">
            <Link to="/contacts">Contactos</Link>
            <Link to="/campaigns">Campañas</Link>
            <Link to="/templates">Plantillas</Link>
          </div>
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faCog} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
