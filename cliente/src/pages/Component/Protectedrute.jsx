// ProtectedRoute.js
import React,{useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../userContext';

const ProtectedRoute = ({ children}) => {
    const { user } = useContext(UserContext); // Obtén el usuario del contexto

  if (!user) {
    // Si no hay usuario, redirige al login
    return <Navigate to="/Login1" replace />;
  }

  if (user && user.role==='empleado') {
    // Si hay roles definidos y el usuario no tiene el rol requerido
    return <Navigate to="/unauthorized" replace />;
  }

  // Si pasa todas las validaciones, renderiza el componente hijo
  if(user && user.role==='admin'){
    return children;
  }
 
};

export default ProtectedRoute;