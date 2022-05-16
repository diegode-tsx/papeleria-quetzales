import React from "react";
import CardProductInfo from "@atoms/CardProductInfo";
import Controls from "@atoms/Controls";
import "./CardProductContent.css";

const CardProductContent = ({theme}) => {
	theme = theme || "cinnamon";
   return (
      <div className="CardProductContent">
         <CardProductInfo theme={theme} hasDiscount={true}/>
         <Controls theme={theme} />
      </div>
   );
};

export default CardProductContent;
