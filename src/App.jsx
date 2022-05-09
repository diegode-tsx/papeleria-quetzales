import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Logo from "@atoms/Logo";
import NavBar from "@atoms/NavBar";
import Button from "@atoms/Button";
import CardProductInfo from "@atoms/CardProductInfo";
import "./styles/global.css";

const App = () => {
   library.add(fas);
   return (
      <div>
         <Logo />
         <NavBar />
         <Button
            text="Registrarse"
            style="fill"
            size="full-width"
            icon="user-plus"
         />
         <CardProductInfo theme='cinnamon'/>
      </div>
   );
};

export default App;
