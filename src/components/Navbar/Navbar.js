import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog, faUser } from "@fortawesome/free-solid-svg-icons";
import { Popover, PopoverBody } from "reactstrap";
import logo from "../../assets/images/logo.png";
import ProfileModal from "./NavbarModals/ProfileModal";
import AccountModal from "./NavbarModals/AccountModal";
import AdminSettingsModal from "./NavbarModals/AdminSettingsModal";
import ChangePasswordModal from "./NavbarModals/ChangePasswordModal";
import BillingDataModal from "./NavbarModals/BillingDataModal";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();
  const [activePopover, setActivePopover] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
  const [isBillingModalOpen, setIsBillingModalOpen] = useState(false);
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

  const toggleProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
  };

  const toggleAccountModal = () => {
    setIsAccountModalOpen(!isAccountModalOpen);
  };
  
  const toggleAdminModal = () => {
    setIsAdminModalOpen(!isAdminModalOpen);
  };
  
  const toggleChangePasswordModal = () => {
    setIsChangePasswordModalOpen(!isChangePasswordModalOpen);
  };
  
  const toggleBillingModal = () => {
    setIsBillingModalOpen(!isBillingModalOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activePopover && !event.target.closest(`#${activePopover}`)) {
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
        <FontAwesomeIcon
          icon={faBell}
          id="notifications"
          onClick={() => togglePopover("notifications")}
        />
        <Popover
          isOpen={activePopover === "notifications"}
          target="notifications"
          innerRef={notificationsRef}
          placement="bottom"
          className="navbar-list"
        >
          <PopoverBody>
            <h4>Notificaciones (0)</h4>
            <input type="text" placeholder="Buscar notificaciones" />
            <p>No hay notificaciones</p>
          </PopoverBody>
        </Popover>
        <FontAwesomeIcon
          icon={faCog}
          id="config"
          onClick={() => togglePopover("config")}
        />
        <Popover
          isOpen={activePopover === "config"}
          target="config"
          innerRef={configRef}
          placement="bottom"
          className="navbar-list"
        >
          <PopoverBody>
            <ul>
              <li onClick={toggleAdminModal}>Configuración administradores</li>
              <li onClick={toggleBillingModal}>Datos de facturación</li>
            </ul>
          </PopoverBody>
        </Popover>
        <FontAwesomeIcon
          icon={faUser}
          id="user"
          onClick={() => togglePopover("user")}
        />
        <Popover
          isOpen={activePopover === "user"}
          target="user"
          innerRef={userRef}
          placement="bottom"
          className="navbar-list"
        >
          <PopoverBody>
            <ul>
              <li onClick={toggleAccountModal}>Datos de cuenta</li>
              <li onClick={toggleProfileModal}>Perfil</li>
              <li onClick={toggleChangePasswordModal}>Cambiar contraseña</li>
              <li>Cerrar sesión</li>
            </ul>
          </PopoverBody>
        </Popover>
      </div>
      {/* Renderizamos los modales */}
      <ProfileModal isOpen={isProfileModalOpen} onClose={toggleProfileModal} />
      <AccountModal isOpen={isAccountModalOpen} onClose={toggleAccountModal} />
      <AdminSettingsModal isOpen={isAdminModalOpen} onClose={toggleAdminModal} />
      <ChangePasswordModal isOpen={isChangePasswordModalOpen} onClose={toggleChangePasswordModal} />
      <BillingDataModal isOpen={isBillingModalOpen} onClose={toggleBillingModal} />
    </nav>
  );
};

export default Navbar;
