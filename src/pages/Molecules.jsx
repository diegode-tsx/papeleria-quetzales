import React from "react";
import NavButtons from "@molecules/NavButtons";
import NavSearch from "@molecules/NavSearch";
import CardProductContent from "@molecules/CardProductContent";

const Molecules = () => {
   return (
      <div>
         <NavButtons />
         <NavSearch />
			<CardProductContent />
      </div>
   );
};

export default Molecules;
