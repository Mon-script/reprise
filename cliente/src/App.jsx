// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RutasProtegidas from './pages/Component/RutasProte';
import { Root } from './pages/Component/Root';
import { NotFound } from './pages/Component/notFound';
import Home from './pages/Component/home';
import {TablaUsuario} from './pages/Component/tabla/TablaUsuario'
import { Producto } from './pages/domain/Producto';
import { Stock } from './pages/domain/stock';
import { Entrada } from './pages/domain/entrada';
import { Salida } from './pages/domain/salida';
import RegistroUsuario from './pages/Component/formulario/FormularioDeRegistro'
import { UserProvider } from './userContext';
import { UnathorizedRoute } from './pages/domain/unathorized';
import ProtectedRoute from './pages/Component/Protectedrute';



function App() {


  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route element={<RutasProtegidas />}>
            <Route element={<Root />}>
              <Route index element={<Home />} />
              <Route path='/producto' element={<Producto />} />
              <Route path='/stock' element={<Stock />} />
              <Route path='/entrada' element={<Entrada />} />
              <Route path='/salida' element={<Salida />} />
              <Route path='/home' element={<Home />} />
              <Route path='/registro' element={<ProtectedRoute><RegistroUsuario/></ProtectedRoute>} />
              <Route path='personal' element={<ProtectedRoute><TablaUsuario /></ProtectedRoute>} />
              <Route path='desautorizado' element={<UnathorizedRoute />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Route>

        </Routes>
      </Router>
    </UserProvider>
  );

}

export default App;




/*import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Stock } from './pages/domain/stock';
import { Entrada } from './pages/domain/entrada';
import { Salida } from './pages/domain/salida';
import { Producto } from './pages/domain/Producto';
import  RutasProtegidas  from './pages/Component/RutasProte';
import { Root } from './pages/Component/Root';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<RutasProtegidas />} replace>
          <Route path='/' element={<Root />}> 
            <Route path='/producto' element={<Producto />} />
            <Route path='/stock' element={<Stock />} />
            <Route path='/entrada' element={<Entrada />} />
            <Route path='/salida' element={<Salida />} />
         </Route>
         <Route path = '*' element={<> <p> 404 no hay nada aqui mi ray 8===D </p></>} />
        </Route>




      </Routes>
    </Router>
  );
}
export default App;*/