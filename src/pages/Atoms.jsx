import React from "react";
import Logo from "@atoms/Logo";
import NavBar from "@atoms/NavBar";
import Button from "@atoms/Button";
import CardProductInfo from "@atoms/CardProductInfo";
import BagButton from "@atoms/BagButton";
import AddToBagButton from "@atoms/AddToBagButton";
import Input from "@atoms/Input";
import Select from "@atoms/Select";
import GoogleButton from "@atoms/GoogleButton";
import Controls from "@atoms/Controls";
import BagProductInfo from "@atoms/BagProductInfo";

const Atoms = () => {
   return (
      <div>
         <Logo />
         <NavBar />
         <Button
            text="Registrarse"
            style="outline"
            size="medium"
            icon="user-plus"
         />
         <GoogleButton />
         <BagButton />
         <AddToBagButton theme="cinnamon" />
         <CardProductInfo theme="cinnamon" hasDiscount={true}/>
         <Controls theme="gray" />
         <BagProductInfo />
         <Input type="text" text="Nombre" />
         <Select />
      </div>
   );
};

export default Atoms;
