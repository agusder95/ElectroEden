import { FaSkull } from "react-icons/fa";

import React from "react";
import { IconContext } from "react-icons";
import { ResimgCountainer, ResolutionWrapper } from "./styles";

const Resolution = () => {
  return (
    <ResolutionWrapper>
      <ResimgCountainer>
        <IconContext.Provider value={{ size: "100%" }}>
          <FaSkull />
        </IconContext.Provider>
      </ResimgCountainer>
      <p>Sorry resolution not supported</p>
    </ResolutionWrapper>
  );
};

export default Resolution;
