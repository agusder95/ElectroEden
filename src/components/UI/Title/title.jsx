import React from "react";
import {
  SectionSeparatorWrapper,
  SepColor,
  TitleCountainer,
  Txt,
} from "./styles";

const Title = ({ sectionName,title }) => {
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

export default Title;
