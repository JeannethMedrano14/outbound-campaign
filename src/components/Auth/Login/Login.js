import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Login.scss';
import imagenlog from '../../../assets/images/imagenlogin.png'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-sidebar">
        <img src={imagenlog} alt="imagenlog" className='imagenlog' />
      </div>

      <div className="login-form">
        <div className="language-selector-container">
          <select className="language-selector">
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
          <FontAwesomeIcon icon={faAngleDown} className="arrow-icon lenguaje" />
          <span className="login-text">Iniciar Sesión</span>
          <button className="register-button">Regístrate</button>
        </div>
        <h1 className="title">Iniciar Sesión</h1>
        <form>
          <label htmlFor="tipoDocumento">Tipo de Documento:</label>
          <select id="tipoDocumento" name="tipoDocumento" className="Ilogin" required placeholder="">
            <option value="">Seleccionar tipo de documento</option>
            <option value="Cedula">Cédula de Ciudadanía</option>
            <option value="Carnet de identidad">Id de compañía</option>
            <option value="Pasaporte">Pasaporte</option>

          </select>
          <label htmlFor="usuario">Nombre de Usuario:</label>
          <input type="text" id="usuario" className="Ilogin" name="usuario" required placeholder='Ingrese su usuario' />

          <label htmlFor="contrasena">Contraseña:</label>
          <div className="password-container" placeholder="Ingrese su contraseña">
            <input
              type={showPassword ? 'text' : 'password'}
              id="contrasena"
              name="contrasena"
              required
              className="Ilogin"
              placeholder="Ingrese su contraseña"
            />
            <div
              onClick={handleTogglePassword}
              className={`eye-icon ${showPassword ? 'show' : 'hide'}`}
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </div>
          </div>

          <a href="#!">Recuperar Contraseña</a>

          <button type="submit" className="btnIniciarSesion">
            Iniciar Sesión
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;

