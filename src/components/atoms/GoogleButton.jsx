import React from "react";
import googleIcon from "@assets/google.png";
import "./GoogleButton.css";

const GoogleButton = () => {
   return (
      <button className="GoogleButton txt-main-bold">
         <img src={googleIcon} alt="" className="GoogleButton-icon" />
         Ingresar con Google
      </button>
   );
};

export default GoogleButton;
