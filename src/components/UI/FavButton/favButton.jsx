import React, { useState } from "react";
import { FavButtonWrapper } from "./styles";
import { IconContext } from "react-icons";
import { BsFillHeartFill } from "react-icons/bs";
import { colors } from "../../../assets/styles/colors";
const FavButton = () => {
  const [fav, setFav] = useState(false);
     return (
    <FavButtonWrapper onClick={()=> setFav(!fav)}>
      <IconContext.Provider value={{color: fav ? colors.red : colors.grey ,size: "1.5rem" }}>
        <BsFillHeartFill />
      </IconContext.Provider>
    </FavButtonWrapper>
  );
};

export default FavButton;
