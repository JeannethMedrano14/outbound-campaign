import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './CreateTemplate.scss';
import smartphone from '../../../assets/images/smartphone.jpg';

const InputGroup = ({ label, placeholder, value, onChange, type = "text", icon, title, inputClass, showIcon = true, children }) => {
  const renderInput = () => {
    if (type === "select") {
      return (
        <select
          id={label}
          name={label}
          className={`Input ${inputClass}`} // Agrega la clase Input al select
          value={value}
          onChange={onChange}
          style={{ width: "calc(100% - -5px)", borderRadius: "7px" }} // Ajusta el tamaño y el radio de borde
        >
          {children}
        </select>
      );
    } else {
      return (
        <input
          type={type}
          id={label}
          name={label}
          className={`Input ${inputClass}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      );
    }
  };

  return (
    <div className="InputGroup">
      <label htmlFor={label} className="Label">
        {label}
      </label>
      <div className="InputWithIcon">
        {showIcon && (
          <div className="IconoInterrogacion" title={title}>
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
        {renderInput()}
      </div>
    </div>
  );
};

const CreateTemplate = () => {
  const [campaignId, setCampaignId] = useState('');
  const [templateTitle, setTemplateTitle] = useState('');
  const [templateLanguage, setTemplateLanguage] = useState('Seleccione una opción');
  const [templateType, setTemplateType] = useState('Seleccione una opción');
  const [templateContent, setTemplateContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="ContainerPrincipal">
      <div className="ContainerSecundario">
        <div className="Header">
          <h2 className="titleTemplate">Crear plantilla</h2>
        </div>
        <div className="Content">
          <div className="Formulario">
            <div className="BackButtonContainer">
              <div className="BackButton" onClick={() => window.history.back()}>
                <FontAwesomeIcon icon={faArrowLeft} /> Volver
              </div>
            </div>
            <InputGroup
              label="ID de la Campaña:"
              placeholder="Ingrese el Id del template"
              value={campaignId}
              onChange={(e) => setCampaignId(e.target.value)}
              icon={faQuestionCircle}
              title="Este campo es para ingresar el ID de la Campaña"
            />
            <InputGroup
              label="Título del Template:"
              placeholder="Ingrese título del template"
              value={templateTitle}
              onChange={(e) => setTemplateTitle(e.target.value)}
              icon={faQuestionCircle}
              title="Este campo es para ingresar el título del Template"
            />
            <InputGroup
              label="Idioma:"
              value={templateLanguage}
              onChange={(e) => setTemplateLanguage(e.target.value)}
              icon={faQuestionCircle}
              title="Este campo es para seleccionar el idioma del Template"
              type="select"

            >
              <option value="">Seleccione una opción</option>
              <option value="spanish">Español</option>
              <option value="english">Inglés</option>
            </InputGroup>
            <InputGroup
              label="Contenido:"
              placeholder="Ingrese el contenido"
              value={templateContent}
              onChange={(e) => setTemplateContent(e.target.value)}
              inputClass="InputContent"
              showIcon={false}
            />
            <InputGroup
              label="Tipo de Template:"
              value={templateType}
              onChange={(e) => setTemplateType(e.target.value)}
              icon={faQuestionCircle}
              title="Este campo es para seleccionar el tipo de Template"
              type="select"
            >
              <option value="">Seleccione una opción</option>
              <option value="image">Imagen</option>
              <option value="text">Texto</option>
            </InputGroup>
            {templateType === 'image' && (
              <InputGroup
                label="Seleccionar Imagen:"
                type="file"
                onChange={handleImageChange}
                icon={faQuestionCircle}
                title="Este campo es para seleccionar una imagen"
              />
            )}
          </div>
          <div className="VisualizerContainer">
            <h3 className='visualizador'>Previsualizador de imagen</h3>
            <div className="smartphoneContainer">
              <img src={smartphone} className="smartphone" alt="Phone" />
              <div className="smartphoneContent">
                <div className="PantallaCelular">
                  <div className="ContenidoCelular">
                    <p> {campaignId}</p>
                    <p> {templateTitle}</p>
                    <p> {templateContent}</p>
                    {/* {templateType && templateType !== 'Seleccione una opción' && <p>{templateType}</p>} */}
                    {selectedImage && (
                      <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '200px', maxHeight: '200px' }} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="Boton">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTemplate;
