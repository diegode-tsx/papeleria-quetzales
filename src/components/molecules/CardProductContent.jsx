import React from "react";
import CardProductInfo from "@atoms/CardProductInfo";
import Controls from "@atoms/Controls";
import "./CardProductContent.css";

const CardProductContent = () => {
   return (
      <div className="CardProductContent">
         <CardProductInfo theme="cinnamon" hasDiscount={true}/>
         <Controls theme="cinnamon" />
      </div>
   );
};

export default CardProductContent;
