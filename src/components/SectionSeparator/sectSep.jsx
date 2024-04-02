import React from "react";
import { SectionSeparatorWrapper, SepColor, Txt } from "./styles";

const SectionSeparator = ({ sectionName }) => {
  return (
    <SectionSeparatorWrapper>
      <SepColor />
      <Txt>{sectionName}</Txt>
    </SectionSeparatorWrapper>
  );
};

export default SectionSeparator;
