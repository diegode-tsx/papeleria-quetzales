import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.css";

const Button = (props) => {
   const { icon, text, style, size, type, handleClick } = props;
   return (
      <button className={`Button ${style} ${size}`} type={type} onClick={handleClick}>
         <FontAwesomeIcon icon={["fas", icon]} />
         {text}
      </button>
   );
};

export default Button;