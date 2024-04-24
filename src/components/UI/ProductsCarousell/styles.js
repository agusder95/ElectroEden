import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";

export const ProductsCarousellWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 320px) {
    height: 18rem;
  }
  @media screen and (min-width: 768px) {
    height: 20rem;
  }
  @media screen and (min-width: 1024px) {
    height: 22rem;
  }
`;

export const ProductCardCountainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-bottom: 1rem;
`;

export const CarousellCountainer = styled.ul`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.$translatevalue}%);
`;

export const ProductCard = styled.li`
  height: 100%;
  /* background-color: red;
  border-right: 1px solid grey; */
  padding: 10px;
`;

/* export const ButtonCountainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 2.5rem;
  height: 30%;
  z-index: 1;
`; */

export const ButtonCarousell = styled.button`
  border-radius: 50%;
  position: absolute;
  padding: 5px;
  height: 2.5rem;
  border: none;
  background-color: ${colors.transparentButton};
  box-shadow: 0px 0px 13px -6px ${colors.grey};
  -webkit-box-shadow: 0px 0px 13px -6px ${colors.grey};
  -moz-box-shadow: 0px 0px 13px -6px ${colors.grey};
  cursor: pointer;
  z-index: 1;
  &:first-child {
    left: 10px;
  }
  &:last-child {
    right: 10px;
  }
`;
