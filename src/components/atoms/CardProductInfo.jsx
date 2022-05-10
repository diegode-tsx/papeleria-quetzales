import React, {useState} from "react";
import "./CardProductInfo.css";

import product from "@assets/product.png";

const CardProductInfo = ({theme}) => {
	const {count, setCount} = useState(0);
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
            <p className="CardProductInfo-title txt-main">
               Papel Bond Tamaño Carta Blanco de 37 kg con 500 Hojas Smart
               Multifuncional
            </p>
				<div className="CardProductInfo-price">
					<p className={`CardProductInfo-actual-price txt-main-bold ${theme}`}>$573.00</p>
					<p className="CardProductInfo-prev-price txt-secondary">$800.00</p>
				</div>
         </div>
      </div>
   );
};

export default CardProductInfo;
