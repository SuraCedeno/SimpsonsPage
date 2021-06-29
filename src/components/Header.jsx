import React from 'react';
import { Link } from 'react-router-dom';


import '../assets/styles/components/Header.scss';
import logo from '../assets/static/LogoSimpsons.png';
import userLogo from  '../assets/static/user-icon.png';

const Header = () => { 
  
  
  return ( 
     
    <header className="header">
      <div className="header__container">
        <Link to="/"> 
           <img className="header__img" src={logo} alt="LosSimpsons"/>
        </Link>
      <div className="header__menu">
         <div className="header__menu--profile" > 
        

            <p>Perfil</p> 
         </div>
            <ul>
                  <li><Link to="/login"> Login </Link></li>
                   <li><Link to="/"> Cerrar Sesión </Link></li>
            </ul>
            </div>
            </div>
      </header>
   )};
  


export default Header;
