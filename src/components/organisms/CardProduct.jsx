import React from "react";
import CardProductButton from "@atoms/CardProductButton";
import CardProductContent from "@molecules/CardProductContent";
import "./CardProduct.css";

const CardProduct = () => {
   const theme = "violet";
   return (
      <div className="CardProduct">
         <CardProductContent theme={theme} />
         <CardProductButton theme={theme} />
      </div>
   );
};

export default CardProduct;
