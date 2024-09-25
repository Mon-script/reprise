// CodigodeBarras2.js
import React, { useState } from 'react';
import './CodigodeBarra2.css';

const CodigodeBarras2 = ({ estadoForm, Texto, idEntrada }) => {
  const [codigoBarras, setCodigoBarras] = useState('');
  const [idEmpleado, setIdEmpleado] = useState('');

  const manejarCambioCodigoBarras = (event) => {
    setCodigoBarras(event.target.value);
  };

  const manejarCambioIdEmpleado = (event) => {
    setIdEmpleado(event.target.value);
  };

  const obtenerInformacionCodigoBarras = () => {
    if (!codigoBarras || !idEntrada || !idEmpleado) {
      alert('Falta información para proceder');
      return;
    }

    if (window.confirm('¿Está seguro de enviar este producto a salida?')) {
      fetch('url/' + idEntrada + '/' + codigoBarras, {
        method: 'DELETE'
      })
        .then(resp => resp.text())
        .then(resp => {
          alert(resp);
        });
    }

    console.log('Código de barras escaneado:', codigoBarras, 'Empleado:', idEmpleado);
    estadoForm(false);
  };

  return (
    <div className='CodigoDeBarras2'>
      <label className='CodigoLabel2' htmlFor="codigoBarras">Ingrese el código de barras: </label>
      <input
        className='CodigoInput2'
        type="number"
        id="codigoBarras"
        value={codigoBarras}
        onChange={manejarCambioCodigoBarras}
      />
      <label className='CodigoLabel2' htmlFor="codigoBarras">Ingrese el código de Empleado: </label>
      <input
        className='CodigoInput2'
        type="number"
        id="idEmpleado"
        value={idEmpleado}
        onChange={manejarCambioIdEmpleado}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button className='CodigoButton2' onClick={obtenerInformacionCodigoBarras}>{Texto}</button>
        <button className='CodigoButton2' onClick={() => estadoForm(false)}>Cerrar</button>
      </div>
    </div>
  );
};

export default CodigodeBarras2;


{/*modificr implementacion:
  // TarjetaStock.jsx
import React, { useState } from 'react';
import CodigodeBarras2 from './CodigodeBarras2'; // Asegúrate de que la ruta sea correcta

const TarjetaStock = ({ producto }) => {
  const { nombre, peso, calidad, color } = producto;
  const [mostrarFormularioSalida, setMostrarFormularioSalida] = useState(false);

  const manejarSalida = () => {
    setMostrarFormularioSalida(true);
  };

  return (
    <div className="cards">
      <div className="title-1">{nombre}</div>
      <img src={Logo} alt="" className='w-[250px] h-[250px] border rounded p-6' />
      <div className="content">
        peso: {peso} <br />
        calidad: {calidad} <br />
        color: {color}
      </div>
      <button className="btn1" onClick={manejarSalida}>Salida</button>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
      </div>
      <div className='CodigosdeB'>
        {mostrarFormularioSalida && <CodigodeBarras2 estadoForm={setMostrarFormularioSalida} Texto="SALIDA" />}
      </div>
    </div>
  );
};

export default TarjetaStock;

// CodigodeBarras2.jsx
import React, { useState } from 'react';

const CodigodeBarras2 = ({ estadoForm, Texto }) => {
  const [codigoBarras, setCodigoBarras] = useState('');

  const manejarCambioCodigoBarras = (event) => {
    setCodigoBarras(event.target.value);
  };

  const obtenerInformacionCodigoBarras = () => {
    // Realiza acciones con el código de barras aquí
    estadoForm(false); // Oculta el formulario
    console.log('Código de barras escaneado:', codigoBarras);
  };

  return (
    <div className='CodigoDeBarras2'>
      <label className='CodigoLabel2' htmlFor="codigoBarras">Ingrese el código de barras:</label>
      <input
        className='CodigoInput2'
        type="number"
        id="codigoBarras"
        value={codigoBarras}
        onChange={manejarCambioCodigoBarras}
      />
      <button className='CodigoButton2' onClick={obtenerInformacionCodigoBarras}>{Texto}</button>
    </div>
  );
};

export default CodigodeBarras2;
 */ }
