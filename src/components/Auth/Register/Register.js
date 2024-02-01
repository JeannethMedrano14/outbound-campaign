import React, { useState } from 'react';
import './Register.scss';
import logo from '../../../assets/images/logo.png';
import phoneimage from '../../../assets/images/phone.png';

const Register = () => {
  const [formData, setFormData] = useState({
    documentType: '',
    username: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario de registro
    console.log(formData);
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <img src={logo} alt="Logo" className="logo" />
        <form onSubmit={handleSubmit}>
          {/* Tipo de documento */}
          <div>
            <label>Tipo de documento </label>
            <select
              name="documentType"
              value={formData.documentType}
              onChange={handleChange}
            >
              {/* Opciones del tipo de documento */}
            </select>
          </div>

          {/* Nombre de usuario */}
          <div>
            <label>Nombre de usuario </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          {/* Contraseña */}
          <div>
            <label>Contraseña </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Repita la contraseña */}
          <div>
            <label>Repita la contraseña </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {/* Checkbox de acuerdo con las políticas */}
          <div>
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <label>He leído y estoy de acuerdo con la política de privacidad y protección de datos personales de SmartSoft Solutions SAS.</label>
          </div>

          {/* Texto sobre el uso de datos personales */}
          <p>
            Tus datos personales se utilizarán para mejorar tu experiencia en
            esta web, gestionar el acceso a tu cuenta, darte un adecuado
            soporte y otros propósitos descritos en nuestra política de
            privacidad.
          </p>

          {/* Botón de registro */}
          <button type="submit">Realizar registro</button>
        </form>
      </div>
      <div className="register-right">
        {/* Imagen a la derecha */}
        <img src={phoneimage} alt="Imagen" className="registration-image" />

      </div>
    </div>
  );
};

export default Register;