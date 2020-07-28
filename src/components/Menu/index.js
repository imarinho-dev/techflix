import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';

const Menu = () => {
	return (
		<nav className='Menu'>
			<a href='/'>
				<img className='Logo' src={Logo} alt='TechFlix Logo' />
			</a>

			<Button as='a' className='Button' href='/'>
				Novo vídeo
			</Button>
		</nav>
	);
};

export default Menu;
