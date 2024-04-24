import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";

export const ProductCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  box-shadow: 0px 0px 15px -6px ${colors.grey};
-webkit-box-shadow: 0px 0px 15px -6px ${colors.grey};
-moz-box-shadow: 0px 0px 15px -6px ${colors.grey};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
     transform: scale(1.05);
  }
`;

export const ProducCardDisc = styled.p`
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 3px;
  border-radius: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const H3ProductName = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

export const ProducCardP = styled.p`
  s{
     margin-left:5px;
    text-decoration: line-through;
    color: ${colors.grey};
  }
`;

export const ProductCardImg = styled.div`
  width: 100%;
  /* height: 135px; */
  background-color: ${colors.white};

  @media screen and (min-width: 320px) {
    height: 110px;
    margin-bottom: 15px;
  }
  @media screen and (min-width: 768px) {
    height: 140px;
    margin-bottom: 7px;
}
  @media screen and (min-width: 1024px) {
    height: 160px;
    margin-bottom: 15px;
  }
`;
