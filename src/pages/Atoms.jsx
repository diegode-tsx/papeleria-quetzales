import React from "react";
import Logo from "@atoms/Logo";
import NavBar from "@atoms/NavBar";
import Button from "@atoms/Button";
import CardProductInfo from "@atoms/CardProductInfo";
import BagButton from "@atoms/BagButton";
import AddToBagButton from "@atoms/AddToBagButton";
import Input from "@atoms/Input";

const Atoms = () => {
   return (
      <div>
         <Logo />
         <NavBar />
         <Button
            text="Registrarse"
            style="outline"
            size="full-width"
            icon="user-plus"
         />
         <CardProductInfo theme="cinnamon" />
         <BagButton />
         <AddToBagButton theme="cinnamon" />
         <Input type="text" text="Nombre" />
      </div>
   );
};

export default Atoms;
