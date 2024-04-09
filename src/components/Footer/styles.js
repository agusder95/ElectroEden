import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const FooterWrapper = styled.footer`
  background-color: ${colors.black};
  color: ${colors.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 2rem;
`;

export const FooterSection = styled.ul`
  margin: 10px;
`;

export const FooterLi = styled.li`
  margin: 10px 0;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 10px;
  h4{
     font-size:12px;
  }
  p{
     font-size:11px;
  }
  a{
     font-size:11px;
  }
  &:first-child{
     padding-left: 0;
  }
`;

export const FooterInput = styled.input`
  height: 2.5rem;
  width: 100%;
  padding: 0 2rem 0 10px;
  border-radius: 5px;
  border: 1px solid white;
  background-color: black;
  color: white;
`;

export const FooterButton = styled.button`
  position: absolute;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
