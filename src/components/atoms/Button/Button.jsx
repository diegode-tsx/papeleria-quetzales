import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.css";

const Button = ({ icon, text, style, size }) => {
   return (
      <button className={`Button Button-${style} Button-${size}`}>
         <FontAwesomeIcon icon={["fas", icon]} />
         {text}
      </button>
   );
};

export default Button;
