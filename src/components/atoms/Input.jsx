import React from 'react';
import './Input.css'

const Input = (props) => {
	const {type, text} = props;
	return (
		<div className="Input">
			<input type={type} name="" id="" className='Input-field txt-secondary-bold'/>
			<label htmlFor="" className='Input-label txt-secondary-bold'>{text}</label>
		</div>
	);
};

export default Input;