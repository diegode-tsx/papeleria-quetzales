import React from 'react';
import Logo from '@atoms/Logo';
import NavBar from '@atoms/NavBar';
import NavButtons from '@molecules/NavButtons';
import NavSearch from '@molecules/NavSearch';
import './Header.css';

const Header = () => {
	return (
		<div className="Header">
			<div className="Header-nav">
				<Logo />
				<NavBar />
				<NavButtons />
			</div>
			<NavSearch />
		</div>
	);
};

export default Header;