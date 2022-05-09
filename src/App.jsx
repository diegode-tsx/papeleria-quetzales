import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Logo from "@atoms/Logo";
import NavBar from "@atoms/NavBar";
import Button from "@atoms/Button";
import CardProductInfo from "@atoms/CardProductInfo";
import BagButton from "@atoms/BagButton";
import "./styles/global.css";

const App = () => {
   library.add(fas);
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
         <CardProductInfo theme='cinnamon'/>
			<BagButton />
      </div>
   );
};

export default App;
