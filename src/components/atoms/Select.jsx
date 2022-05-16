import React from "react";
import "./Select.css";

const Select = () => {
   return (
      <div className="Select">
         <select name="" id="" className="Select-field txt-secondary-bold">
            <option value="" className="Select-option">
               Tarjeta de crédito
            </option>
            <option value="" className="Select-option">
               Tarjeta de débito
            </option>
         </select>
         <label htmlFor="" className="Select-label txt-secondary-bold">
            Forma de pago
         </label>
      </div>
   );
};

export default Select;
