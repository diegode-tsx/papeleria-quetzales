import React from "react";
import './Logo.css';

import logo from "@assets/logos/quetzales.png";

const Logo = () => {
   return (
      <div className="Logo">
         <img src={logo} alt="" className="Logo-image"/>
         <p className="Logo-name">Quetzales</p>
      </div>
   );
};

export default Logo;
