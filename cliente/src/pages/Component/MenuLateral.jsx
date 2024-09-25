import { Sidebar } from "keep-react";
import { TeamOutlined, UserAddOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import {
  Storefront,
  ArrowCircleLeft,
  StackOverflowLogo,
  ArrowCircleRight,
} from "phosphor-react";
import Logo from '../Component/img/Logo.jpg';
import React, { useContext } from 'react';
import { UserContext } from '../../userContext';

export const SidebarComponent = () => {
  const { user } = useContext(UserContext);
  

  const menuItemsAd = [
    { id: 1, nombre: 'Producto', ruta: '/producto', icono: <Storefront size={32} color="#7376a0" /> },
    { id: 2, nombre: 'Stock', ruta: '/stock', icono: <StackOverflowLogo size={32} color="#0715cf" /> },
    { id: 3, nombre: 'Entrada', ruta: '/entrada', icono: <ArrowCircleRight size={32} color="#0adb23" /> },
    { id: 4, nombre: 'Salida', ruta: '/salida', icono: <ArrowCircleLeft size={32} color="#db0a0a" /> },
    { id: 5, nombre: 'Registro', ruta: '/registro', icono: <UserAddOutlined size={32} color="#db0a0a" /> },
    { id: 6, nombre: 'Personal', ruta: '/personal', icono: <TeamOutlined size={32} color="#db0a0a" /> },
  ];

  const menuItems = [
    { id: 1, nombre: 'Producto', ruta: '/producto', icono: <Storefront size={32} color="#7376a0" /> },
    { id: 2, nombre: 'Stock', ruta: '/stock', icono: <StackOverflowLogo size={32} color="#0715cf" /> },
    { id: 3, nombre: 'Entrada', ruta: '/entrada', icono: <ArrowCircleRight size={32} color="#0adb23" /> },
    { id: 4, nombre: 'Salida', ruta: '/salida', icono: <ArrowCircleLeft size={32} color="#db0a0a" /> },
  ];

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <img src={Logo} alt="" className='w-[150px] h-[150px] border rounded p-1' />
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {(user && user.role === 'admin' ? menuItemsAd : menuItems).map(element => (
            <Sidebar.Item icon={element.icono} key={element.id} style={{ marginTop: '4vh', padding: '2vw' }}>
              <NavLink to={element.ruta}>{element.nombre}</NavLink>
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
