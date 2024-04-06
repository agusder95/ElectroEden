import React from "react";
import {
  SectionSeparatorWrapper,
  SepColor,
  TitleCountainer,
  Txt,
} from "./styles";

const SectionSeparator = ({ sectionName,title }) => {
  return (
    <SectionSeparatorWrapper>
      <TitleCountainer>
        <SepColor />
        <Txt>{sectionName}</Txt>
      </TitleCountainer>
      <h1>{title}</h1>
    </SectionSeparatorWrapper>
  );
};

export default SectionSeparator;
