import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./BagButton.css";

const BagButton = () => {
   return (
      <button className="BagButton txt-medium">
			0
         <FontAwesomeIcon icon={["fas", "basket-shopping"]} />
      </button>
   );
};

export default BagButton;