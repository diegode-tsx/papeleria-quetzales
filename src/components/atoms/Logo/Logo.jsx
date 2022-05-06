import React from "react";
import './Logo.css';

import logo from "@assets/logos/quetzales.png";

const Logo = () => {
   return (
      <div className="logo">
         <img src={logo} alt="" />
         <p>Quetzales</p>
      </div>
   );
};

export default Logo;
