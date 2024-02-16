import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog, faUser } from "@fortawesome/free-solid-svg-icons";
import { Popover, PopoverBody } from "reactstrap";
import logo from "../../assets/images/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();
  const [activePopover, setActivePopover] = useState(null);
  const notificationsRef = useRef(null);
  const configRef = useRef(null);
  const userRef = useRef(null);

  const togglePopover = (popover) => {
    if (activePopover === popover) {
      setActivePopover(null);
    } else {
      setActivePopover(popover);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activePopover &&
        !event.target.closest(`#${activePopover}`)
      ) {
        setActivePopover(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activePopover]);

  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="links">
        <Link
          to="/inicio"
          className={location.pathname === "/inicio" ? "active" : ""}
        >
          Inicio
        </Link>
        <Link
          to="/contacts"
          className={location.pathname === "/contacts" ? "active" : ""}
        >
          Contactos
        </Link>
        <Link
          to="/campaigns"
          className={location.pathname === "/campaigns" ? "active" : ""}
        >
          Campañas
        </Link>
        <Link
          to="/templates"
          className={location.pathname === "/templates" ? "active" : ""}
        >
          Plantillas
        </Link>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faBell} id="notifications" onClick={() => togglePopover("notifications")} />
        <Popover isOpen={activePopover === "notifications"} target="notifications" innerRef={notificationsRef} placement="bottom" className="navbar-list">
          <PopoverBody>
            <h6>Notificaciones (0)</h6>
            <input type="text" placeholder="Buscar notificaciones" />
            <p>No hay notificaciones</p>
          </PopoverBody>
        </Popover>
        <FontAwesomeIcon icon={faCog} id="config" onClick={() => togglePopover("config")} />
        <Popover isOpen={activePopover === "config"} target="config" innerRef={configRef} placement="bottom" className="navbar-list">
          <PopoverBody>
            <ul>
              <li>Configuración administradores</li>
              <li>Datos de facturación</li>
            </ul>
          </PopoverBody>
        </Popover>
        <FontAwesomeIcon icon={faUser} id="user" onClick={() => togglePopover("user")} />
        <Popover isOpen={activePopover === "user"} target="user" innerRef={userRef} placement="bottom" className="navbar-list">
          <PopoverBody>
            <ul>
              <li>Datos de cuenta</li>
              <li>Perfil</li>
              <li>Cambiar contraseña</li>
              <li>Cerrar sesión</li>
            </ul>
          </PopoverBody>
        </Popover>
      </div>
    </nav>
  );
};

export default Navbar;
