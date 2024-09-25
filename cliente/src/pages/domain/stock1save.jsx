
import TarjetaStock from "../Component/tarjetas/TarjetaStock";
import Matriz from "../Component/matrizStock/matrizS";
import "./Stockpag.css";
import { useState, useEffect } from "react";

export const Stock = () => {
  const [showForm, setShowForm] = useState('')
  const [codigoProducto, setCodigoProducto] = useState('')
  const [estanteria, setEstanteria] = useState('')

  const numEstantes = 3;
  const numFilas = 2;
  const numColumnas = 3;

  const matrizEjemplo = [];
  for (let i = 0; i < numEstantes; i++) {
    matrizEjemplo.push([]);
    for (let j = 0; j < numFilas; j++) {
      matrizEjemplo[i].push([]);
      for (let k = 0; k < numColumnas; k++) {
        matrizEjemplo[i][j].push(`${String.fromCharCode(65 + i)}${j + 1}${String.fromCharCode(65 + k)}`);
      }
    }
  }

  const productos = [

    { nombre: 'Frutilla', peso: '30kg', calidad: 'Buena', color: 'rojas' },
    { nombre: 'Manzana', peso: '25kg', calidad: 'Media', color: 'verde' },
    { nombre: 'Pera', peso: '20kg', calidad: 'Premium', color: 'amarilla' },
    { nombre: 'Frutilla', peso: '30kg', calidad: 'primera calidad', color: 'rojas' },
    { nombre: 'Manzana', peso: '25kg', calidad: 'segunda calidad', color: 'verde' },
    { nombre: 'Pera', peso: '20kg', calidad: 'tercera calidad', color: 'amarilla' }

    // Otros productos...
  ];

  const agregarEntrada = () => {
    if (estanteria < 1 && estanteria > numEstantes) {
      alert(`Debes indicar un estante entre 1 y ${numEstantes} `)
      return
    }

    if(!codigoProducto||!estanteria){
      alert('Todos los campos deben estar completados')
    }


    const now = new Date(); // trae la fecha y hora actual
    const fecha = now.toISOString().split('T')[0]; // Fecha en formato YYYY-MM-DD
    const hora = now.toTimeString().split(' ')[0]; // Hora en formato HH:MM:SS

    const data = {
      codigo: codigoProducto,
      estante: parseInt(estanteria),
      fecha: fecha, 
      hora: hora   
    };

    fetch('url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(resp => {
        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }
        return resp.text();
      })
      .then(respText => alert(respText))
      .catch(error => console.error('Error:', error));
    

  }

  return <>

    <div className="m-4 flex flex-col items-center pt-4">
      <div className="bg-gray-100 p-4 shadow-md w-full flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-red-700 text">Entrada de Stock!</h2>
        <button
          className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300"
          onClick={() => {
            setShowForm(true)
            setCodigoProducto('');
            setEstanteria('');

          }}
          hidden={showForm ? true : false}
        >
          Agregar
        </button>
      </div>
      {showForm && (
        <div className="flex flex-col items-center justify-center w-full mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
            <form className="space-y-6 w-full">

              <div>
                <label htmlFor="codigoProducto" className="block text-sm font-medium text-gray-700 mb-1">
                  Codigo de producto:
                </label>
                <input
                  id="codigoProducto"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  type="number"
                  required
                  value={codigoProducto}
                  onChange={(e) => setCodigoProducto(e.target.value)}

                />
              </div>
              <div>
                <label htmlFor="estanteria" className="block text-sm font-medium text-gray-700 mb-1">
                  Estanteria:
                </label>
                <input
                  id="estanteria"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  type="number"
                  required
                  value={estanteria}
                  onChange={(e) => setEstanteria(e.target.value)}

                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
                  type="button"
                  onClick={agregarEntrada}

                >
                  Agregar
                </button>
                <button
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-400 transition duration-300"
                  type="button"
                  onClick={() => setShowForm(false)}
                >
                  Salir
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>

    <Matriz estantes={matrizEjemplo} productos={productos} /> </>
};