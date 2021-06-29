import React,{ useState } from 'react';

import '../assets/styles/components/Login.scss';


const Login = () => {


	return ( 

<section className='login'>
		<section className='login__container'>
		
            <h2>Inicia sesión</h2>
			<form className='login__container--form'>
				<input 
				className='input' 
				name="email"
				type='text' 
				placeholder='Correo'
				/>
				
				<input 
				name="password"
				className='input' 
				type='password' 
				placeholder='Contraseña'
				 />
				<button className='button' type='submit '>Iniciar sesión</button>
				<div className='login__container--remember-me'>
					<label>
						<input type='checkbox' id='cbox1' value='first_checkbox' />
						Recuérdame
					</label>
					
				</div>
			</form>
			
			
		</section>
	</section>

)}


export default Login;