import React from 'react';
import './CreateTemplate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';


const CreateTemplate = () => {
  return (
    <div className="ContainerPrincipal">
      <div className="ContainerSecundario">
        <div className='Header'>
          <div className='tab'>Plantillas</div>
        </div>
        <div className="contentt">
          <div className="ContenedorInput">
            <label htmlFor="campaign-id" className="Etiqueta" >ID de la Campaña:</label>
            <input type="text" id="campaign-id" name="campaign-id" className="Input" placeholder='Ingrese el Id del template' />
            <div className="IconoInterrogacion" title="Este campo es para ingresar el ID de la Campaña">
            <FontAwesomeIcon icon={faQuestionCircle} className="IconoInterrogacion" title="Este campo es para ingresar el ID de la Campaña" />

            </div>
          </div>

          <div className="ContenedorInput">
            <label htmlFor="template-title" className="Etiqueta">Título del Template:</label>
            <input type="text" id="template-title" name="template-title" className="Input" placeholder='Ingrese título del template'/>
            <div className="IconoInterrogacion" title="Este campo es para ingresar el título del Template">
            <FontAwesomeIcon icon={faQuestionCircle} className="IconoInterrogacion" title="Este campo es para ingresar el ID de la Campaña" />

            </div>
          </div>

          <div className="ContenedorInput">
            <label htmlFor="template-language" className="Etiqueta">Idioma:</label>
            <select id="template-language" name="template-language" className="Select" >
              <option value="image">Seleccione una opción</option>
              <option value="spanish">Español</option>
              <option value="english">Inglés</option>
            </select>
            <div className="IconoInterrogacion" title="Este campo es para seleccionar el idioma del Template">
            <FontAwesomeIcon icon={faQuestionCircle} className="IconoInterrogacion" title="Este campo es para ingresar el ID de la Campaña" />

            </div>
          </div>

          <div className="ContenedorInput">
            <label htmlFor="template-type" className="Etiqueta">Tipo de Template:</label>
            <select id="template-type" name="template-type" className="Select">
              <option value="image">Seleccione una opción</option>
              <option value="image">Imagen</option>
              <option value="text">Texto</option>
            </select>
            <div className="IconoInterrogacion" title="Este campo es para seleccionar el tipo de Template">
            <FontAwesomeIcon icon={faQuestionCircle} className="IconoInterrogacion" title="Este campo es para ingresar el ID de la Campaña" />

            </div>
          </div>

          <div className="ContenedorInput">
            <label htmlFor="template-content" className="Etiqueta">Contenido:</label>
            <input type="text" id="template-content" name="template-content" className="InputAncho" />
            <div className="IconoInterrogacion" title="Este campo es para ingresar el contenido del Template">
            </div>
          </div>

          <div className="VisualizacionCelular">
            <h2>Visualización en Celular</h2>
            <div className="Celular">

            </div>
          </div>
          <button type="submit" className="Boton">Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTemplate;
