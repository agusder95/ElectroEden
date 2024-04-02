import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const HeaderWrapper = styled.header`
  background-color: ${colors.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid ${colors.grey};
  height: 90px;
`;

export const LogoCountainer = styled.div`
  height: 50px;
  cursor: pointer;
`;

export const UserCountainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  @media screen and (min-width: 320px) {
    justify-content: flex-end;
  }
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
  }
  
`;

export const Menu = styled.div`
  width: 100%;
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
  }
  align-items: center;
  justify-content: space-around;
`;

export const IconCountainer = styled.div`
  width: 10rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HMenuCountainer = styled.div`
  height: 40px;
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
