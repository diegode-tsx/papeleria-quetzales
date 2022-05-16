import React from "react";
import "./CardProductInfo.css";

import product from "@assets/product.png";

const CardProductInfo = (props) => {
	const {theme, hasDiscount} = props;
   return (
      <div className="CardProductInfo">
         <div className={`CardProductInfo-image-container ${theme}`}>
            <img
               src={product}
               alt="producto"
               className="CardProductInfo-image"
            />
         </div>
         <div className="CardProductInfo-text">
            <p className="CardProductInfo--product-title txt-main">
               Papel Bond Tamaño Carta Blanco de 37 kg con 500 Hojas Smart
               Multifuncional
            </p>
				<div className="CardProductInfo-price">
					<p className={`CardProductInfo-actual-price txt-main-bold ${theme}`}>$573.00</p>
					{hasDiscount && <p className="CardProductInfo-prev-price txt-secondary">$800.00</p>}
				</div>
         </div>
      </div>
   );
};

export default CardProductInfo;
