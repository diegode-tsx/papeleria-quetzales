import React from "react";
import product from '@assets/product.png';
import "./BagProductInfo.css";

const BagProductInfo = () => {
   return (
      <div className="BagProductInfo">
         <img src={product} alt="" className="BagProductInfo-image" />
         <p className="BagProductInfo--product-title txt-main-bold">
            Papel Bond Tamaño Carta Blanco de 37 kg con 500 Hojas Smart
            Multifuncional
         </p>
      </div>
   );
};

export default BagProductInfo;
