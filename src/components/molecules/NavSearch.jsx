import React from 'react';
import Button from '@atoms/Button';
import './NavSearch.css'

const NavSearch = () => {
	return (
		<div className="NavSearch">
			<input className='NavSearch-input txt-secondary-bold' type="text" placeholder='...' />
			<Button icon="magnifying-glass" text="Buscar" style="fill" size="small"/>
		</div>
	);
};

export default NavSearch;