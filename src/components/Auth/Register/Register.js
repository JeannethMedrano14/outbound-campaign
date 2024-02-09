import React, { useState } from "react";
import "./Register.scss";
import logo from "../../../assets/images/logo.png";
import phoneimage from "../../../assets/images/phone.png";

const Register = () => {
  const [formData, setFormData] = useState({
    documentType: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
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
<div className="center-logo">
<img src={logo} alt="Logo" className="logo" />

  </div>        
  <form onSubmit={handleSubmit} className="formContainer">
          {/* Tipo de documento */}
          <div>
            <label className="tipo-doc">Tipo de documento </label>
            <select
              name="documentType"
              value={formData.documentType}
              onChange={handleChange}
              className="selectCC"
            >
              <option value="cc">Cédula de ciudadanía</option>
              <option value="nit">NIT</option>
              <option value="ce">Cédula de extranjería</option>

            </select>
          </div>

          <div className="fields">
            {/* Número de documento */}
            <div>
              <label>Número de documento </label>
              <input
                type="text"
                name="numerodocumento"
                value={formData.numerodocumento}
                onChange={handleChange}
                placeholder="Número de documento"
              />
            </div>

            {/* Nombre de usuario */}
            <div>
              <label>Nombre de usuario </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Nombre de usuario"
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
                placeholder="Contraseña"
              />
            </div>

            {/* Repita la contraseña */}
            <div>
              <label>Repita contraseña </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Repita contraseña"
              />
            </div>
          </div>


          <div className="check">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <p className="policy">
              He leído y estoy de acuerdo con la política de privacidad y protección de datos personales de SmartSoft Solutions SAS.
            </p>
          </div>

          <p className="policy">
            Tus datos personales se utilizarán para mejorar tu experiencia en
            esta web, gestionar el acceso a tu cuenta, darte un adecuado soporte
            y otros propósitos descritos en nuestra política de privacidad.
          </p>

          <button className="register-button" type="submit">Realizar registro</button>
        </form>
      </div>
      <div className="register-right">
        <img src={phoneimage} alt="Imagen" className="registration-image" />
      </div>
    </div>
  );
};

export default Register;