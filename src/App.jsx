import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Logo from "@atoms/Logo/Logo";
import NavBar from "@atoms/NavBar/NavBar";
import Button from "@atoms/Button/Button";
import "./styles/global.css";

const App = () => {
   library.add(fas);
   return (
      <div>
         <Logo />
         <NavBar />
         <Button
            text="Ingresar"
            style="outline"
            size="big"
            icon="user-plus"
         />
      </div>
   );
};

export default App;
