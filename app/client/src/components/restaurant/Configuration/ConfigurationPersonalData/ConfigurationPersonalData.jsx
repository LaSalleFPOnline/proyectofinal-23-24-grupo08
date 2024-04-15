import React from 'react';
import './configurationPersonalDataStyles.css';

function ConfigurationPersonalData() {
    return (
        <div className='personalDataMainContainer'>
            <h2>INFORMACION PERSONAL</h2>
            <div className='personalDataContainer'>
                <div className="personalDataRow">
                    <div className="personalDataItem">
                        <label>Nombre:</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="personalDataItem">
                        <label>Apellidos:</label>
                        <input type="text" name="surname" />
                    </div>
                </div>
                <div className="personalDataRow">
                    <div className="personalDataItem">
                        <label>Email:</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="personalDataItem">
                        <label>Telefono:</label>
                        <input type="text" name="phone" />
                    </div>
                </div>
                <div className="personalDataRow">
                    <div className="personalDataItem">
                        <label>Contraseña:</label>
                        <input type="text" name="password" />
                    </div>
                    <div className="personalDataItem">
                        <label>Repetir Contraseña:</label>
                        <input type="text" name="password" />
                    </div>
                </div>
                <div className="personalDataRow">
                    <div className="lastPersonalDataItem">
                        <button>Guardar cambios</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfigurationPersonalData;