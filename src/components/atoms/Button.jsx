import React from "react";
import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.css";

const Button = (props) => {
   const { icon, text, style, size } = props;
   return (
      <button className={`Button ${style} ${size}`}>
         <FontAwesomeIcon icon={["fas", icon]} />
         {text}
      </button>
   );
};

Button.propTypes = {
	
}
export default Button;
