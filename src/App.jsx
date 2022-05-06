import React from "react";
import Logo from "./components/atoms/Logo/Logo";
import NavBar from "./components/atoms/NavBar/NavBar";
import "./styles/global.css";

const App = () => {
   return (
      <div>
         <Logo />
         <NavBar />
      </div>
   );
};

export default App;
