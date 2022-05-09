import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './AddToBagButton.css';

const AddToBagButton = ({theme}) => {
	return (
		<button className={`AddToBagButton txt-main-bold ${theme}`}>
			<FontAwesomeIcon icon={["fas", "basket-shopping"]} />
			Añadir a la bolsa
		</button>
	);
};

export default AddToBagButton;