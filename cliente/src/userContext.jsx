import React, { createContext, useState, useEffect } from 'react';
import Login1 from './pages/Component/Login/log'; // Importar el componente Login1

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Nuevo estado de carga

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const { exp, role } = parseJWT(token);
            const currentTime = Date.now() / 1000; // Convertir el tiempo actual a segundos

            if (exp < currentTime) {
                // Si el token ya ha expirado, lo eliminamos
                localStorage.removeItem('token');
                setUser(null);
            } else {
                // Si el token es válido, configuramos el usuario
                setUser({ token, role });

                // Configurar un timer para cuando el token expire
                const expirationTime = (exp * 1000) - Date.now(); // Tiempo restante en milisegundos

                const timeoutId = setTimeout(() => {
                    localStorage.removeItem('token');
                    setUser(null);
                }, expirationTime);

                // Limpiar el timeout cuando el componente se desmonte o se actualice
                return () => clearTimeout(timeoutId);
            }
        }

        setLoading(false); // Finalizar la carga cuando se completa la verificación
    }, []);

    const parseJWT = (token) => {
        if (!token) return {};
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );

        return JSON.parse(jsonPayload);
    };

    // Mostrar un loader si estamos verificando el token
    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {/* Si no hay token o el token ha expirado, renderiza Login1 */}
            {!user ? <Login1 /> : children}
        </UserContext.Provider>
    );
};


