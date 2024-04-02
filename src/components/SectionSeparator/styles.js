import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const SectionSeparatorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3rem;
  margin: 2.5rem 0.5rem;
`;

export const SepColor = styled.div`
  background-color: ${colors.red};
  height: 100%;
  width: 2rem;
  margin-right: 1rem;
  border-top-left-radius: 25%;
  border-bottom-left-radius: 25%;
`;

export const Txt = styled.p`
  color: ${colors.red};
`;
