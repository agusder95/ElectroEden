import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";

export const SectionSeparatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 2.5rem 0.5rem;
  @media screen and (min-width: 320px) {
    height: 5rem;
  }
  @media screen and (min-width: 768px) {
    height: 6rem;
  }
  @media screen and (min-width: 1024px) {
    height: 7rem;
  }
  h1{
    margin-left: 2rem;
  }
`;

export const TitleCountainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
  @media screen and (min-width: 320px) {
    height: 2rem;
  }
  @media screen and (min-width: 768px) {
    height: 3rem;
  }
  @media screen and (min-width: 1024px) {
    height: 3rem;
  }
`;

export const SepColor = styled.div`
  background-color: ${colors.red};
  height: 100%;
  width: 1.5rem;
  margin-right: 1rem;
  border-top-left-radius: 25%;
  border-bottom-left-radius: 25%;
`;

export const Txt = styled.p`
  color: ${colors.red};
`;




