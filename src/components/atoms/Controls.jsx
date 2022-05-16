import React, {useState} from "react";
import "./Controls.css";

const Controls = ({ theme }) => {
   const [count, setCount] = useState(0);
   return (
      <div className="Controls">
         <button
            className={`Controls-button txt-main ${theme}`}
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
         >
            -
         </button>
         <span className="Controls-counter txt-main">{count}</span>
         <button
            className={`Controls-button txt-main ${theme}`}
            onClick={() => setCount(count + 1)}
         >
            +
         </button>
      </div>
   );
};

export default Controls;
