import React from "react";
import Button from "@atoms/Button";
import BagButton from "@atoms/BagButton";
import './NavButtons.css'

const NavButtons = () => {
   return (
      <div className="NavButtons">
         <BagButton />
         <Button
            icon="right-to-bracket"
            text="Ingresar"
            style="outline"
            size="big"
         />
         <Button
            icon="user-plus"
            text="Registrarse"
            style="fill"
            size="big"
         />
      </div>
   );
};

export default NavButtons;
