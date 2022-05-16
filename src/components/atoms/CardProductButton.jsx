import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CardProductButton.css';

const CardProductButton = ({theme}) => {
	return (
		<button className={`CardProductButton txt-main-bold ${theme}`}>
			<FontAwesomeIcon icon={["fas", "basket-shopping"]} />
			Añadir a la bolsa
		</button>
	);
};

export default CardProductButton;