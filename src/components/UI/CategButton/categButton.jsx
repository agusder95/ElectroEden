import React from "react";
import { CategoryBtnWrapper, TxtCategory } from "./styles";
import { IconContext } from "react-icons";
const CategoryBtn = ({ icon, txt, click, active }) => {
  return (
     <CategoryBtnWrapper onClick={click} $active={active}>
          <IconContext.Provider value={{ size: "30%" }}>
               {icon}
          </IconContext.Provider>
          <TxtCategory>{txt}</TxtCategory>
     </CategoryBtnWrapper>)
};

export default CategoryBtn;
