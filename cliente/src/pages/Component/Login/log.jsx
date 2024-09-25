import React from 'react'
import { useState } from 'react';
import "./LoginRegister.css";
import { FaUser, FaLock } from "react-icons/fa";
import {Root} from '../Root'
import { Outlet } from 'react-router-dom';

 const Login1 = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);


    const manejarEnviar = (e) =>{
        e.preventDefault();
        const data = {
            username: username,
            password: password
        };
        //console.log("El usuario es: "+ username + " y su contraseña es: " + password )

        //aqui empiesa la peticion
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response=> response.json())
            .then(result => {
                console.log(result.token)
                if(result.token){
                    localStorage.setItem('token', result.token)
                    setLoginSuccessful(true);
                } else {
                    setLoginSuccessful(false);
                }
            })
            .catch(error =>{
                console.log(error)
            })
        //aqui termina
    }

    return (
        <> {loginSuccessful ? <Outlet />:
        <div className='contenedorbody'>
              <div className='wrapper'>
           <div className='form-box login'>
             <form action="">
                 <h1>Login</h1>
                 <div className="input-box">
                     <input onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder='Usuario' required /><FaUser className='icon'/>
                 </div>
                 <div className="input-box">
                     <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Contraseña' required /><FaLock className='icon'/>
                 </div>
                 <div className="remember-forgot">
                     <label><input type="checkbox" /> Recuerdame</label>
                 </div>
                 <button onClick={manejarEnviar}>Ingresar</button>
             </form>
            </div>
         </div>
        </div>}</>
        
   )
 }
 export default Login1
 
