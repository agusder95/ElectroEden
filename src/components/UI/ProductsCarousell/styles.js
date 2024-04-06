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
  justify-content: flex-start;
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
  background-color: red;
  border-right: 1px solid grey;
`;

export const ButtonCountainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 2.5rem;
  height: 30%;
  z-index: 1;
`;

export const ButtonCarousell = styled.button`
  border-radius: 50%;
  padding: 5px;
  height: 100%;
  border: none;
  background-color: ${colors.transparentButton};
  cursor: pointer;
`;
