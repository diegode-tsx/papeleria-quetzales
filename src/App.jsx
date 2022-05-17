import React from "react";
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Atoms from "@pages/Atoms";
import Molecules from "@pages/Molecules";
import Organisms from '@pages/Organisms';
import Home from "@pages/Home";
import "./styles/global.css";


const App = () => {
   library.add(fas);
   return (
      <Router>
         <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/atoms" element={<Atoms />} />
            <Route exact path="/molecules" element={<Molecules />} />
            <Route exact path="/organisms" element={<Organisms />} />
            <Route exact path="*" element={(<div>Page not found 404</div>)} />
         </Routes>
      </Router>
   );
};

export default App;
