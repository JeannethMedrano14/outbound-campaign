import React, { useState } from 'react';
import './CreateTemplate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const CreateTemplate = () => {
  const [campaignId, setCampaignId] = useState('');
  const [templateTitle, setTemplateTitle] = useState('');
  const [templateLanguage, setTemplateLanguage] = useState('Seleccione una opción');
  const [templateType, setTemplateType] = useState('Seleccione una opción');
  const [templateContent, setTemplateContent] = useState('');
  
  return (
    <div className="ContainerPrincipal">
      <div className="ContainerSecundario">
        <div className='Header'>
          <div className='tab'>Plantillas</div>
        </div>
        <div className="contentt">
          <div className="ContenedorInput">
            <label htmlFor="campaign-id" className="Etiqueta" >ID de la Campaña:</label>
            <input 
              type="text" 
              id="campaign-id" 
              name="campaign-id" 
              className="Input" 
              placeholder='Ingrese el Id del template' 
              value={campaignId} 
              onChange={(e) => setCampaignId(e.target.value)} 
            />
            <div className="IconoInterrogacion" title="Este campo es para ingresar el ID de la Campaña">
              <FontAwesomeIcon icon={faQuestionCircle} className="IconoInterrogacion" title="Este campo es para ingresar el ID de la Campaña" />
            </div>
          </div>

          <div className="ContenedorInput">
            <label htmlFor="template-title" className="Etiqueta">Título del Template:</label>
            <input 
              type="text" 
              id="template-title" 
              name="template-title" 
              className="Input" 
              placeholder='Ingrese título del template'
              value={templateTitle} 
              onChange={(e) => setTemplateTitle(e.target.value)} 
            />
            <div className="IconoInterrogacion" title="Este campo es para ingresar el título del Template">
              <FontAwesomeIcon icon={faQuestionCircle} className="IconoInterrogacion" title="Este campo es para ingresar el ID de la Campaña" />
            </div>
          </div>

          <div className="ContenedorInput">
            <label htmlFor="template-language" className="Etiqueta">Idioma:</label>
            <select 
              id="template-language" 
              name="template-language" 
              className="Select" 
              value={templateLanguage} 
              onChange={(e) => setTemplateLanguage(e.target.value)}
            >
              <option value="Seleccione una opción">Seleccione una opción</option>
              <option value="spanish">Español</option>
              <option value="english">Inglés</option>
            </select>
            <div className="IconoInterrogacion" title="Este campo es para seleccionar el idioma del Template">
              <FontAwesomeIcon icon={faQuestionCircle} className="IconoInterrogacion" title="Este campo es para ingresar el ID de la Campaña" />
            </div>
          </div>

          <div className="ContenedorInput">
            <label htmlFor="template-type" className="Etiqueta">Tipo de Template:</label>
            <select 
              id="template-type" 
              name="template-type" 
              className="Select"
              value={templateType} 
              onChange={(e) => setTemplateType(e.target.value)}
            >
              <option value="Seleccione una opción">Seleccione una opción</option>
              <option value="image">Imagen</option>
              <option value="text">Texto</option>
            </select>
            <div className="IconoInterrogacion" title="Este campo es para seleccionar el tipo de Template">
              <FontAwesomeIcon icon={faQuestionCircle} className="IconoInterrogacion" title="Este campo es para ingresar el ID de la Campaña" />
            </div>
          </div>

          <div className="ContenedorInput">
            <label htmlFor="template-content" className="Etiqueta">Contenido:</label>
            <input 
              type="text" 
              id="template-content" 
              name="template-content" 
              className="InputAncho" 
              value={templateContent} 
              onChange={(e) => setTemplateContent(e.target.value)}
            />
            <div className="IconoInterrogacion" title="Este campo es para ingresar el contenido del Template">
            </div>
          </div>

          <div className="VisualizacionCelular">
            <h2>Visualización en Celular</h2>
            <div className="Celular">
              <FontAwesomeIcon icon={faMobileAlt} className="IconoCelular" />
              <div className="PantallaCelular">
                <div className="ContenidoCelular">
                  <p><strong>ID de la Campaña:</strong> {campaignId}</p>
                  <p><strong>Título del Template:</strong> {templateTitle}</p>
                  <p><strong>Idioma:</strong> {templateLanguage}</p>
                  <p><strong>Tipo de Template:</strong> {templateType}</p>
                  <p><strong>Contenido:</strong> {templateContent}</p>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="Boton">Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTemplate;
