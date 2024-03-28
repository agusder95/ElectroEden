import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";

export const HMenuWrapper = styled.div`
  position: relative;
  width: 35px;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ToggleButton = styled.button`
  z-index: 1;
  background-color: transparent;
  border: none;
`;

export const Bar = styled.div`
  width: 100%;
  height: 3px;
  margin: 6px 0;
  background-color: ${colors.black};
  transition: 0.4s;
  &:nth-child(1) {
    transform: ${(props) =>
      props.$menuopen ? "rotate(45deg) translate(7px, 7px);" : "none"};
  }
  &:nth-child(2) {
    opacity: ${(props) => (props.$menuopen ? "0" : "1")};
  }
  &:nth-child(3) {
    transform: ${(props) =>
      props.$menuopen ? " rotate(-45deg) translate(6px, -6px);" : "none"};
  }
`;

export const MenuContent = styled.div`
  box-shadow: -6px 0px 30px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  z-index: 0;
  transition: left 0.2s ease-in-out;
  top: 0;
  left: ${(props) => (props.$menuopen ? -185 : 185)}px;
  position: absolute;
  background-color: springgreen;
  width: 15rem;
  padding-top:1.5rem;
`;
