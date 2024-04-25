import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const ProductPagWrapper = styled.div`
  margin-top: 4rem;
`;

export const ProductSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;

  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height:40rem; */
`;

export const ProductImgContainer = styled.div`
  margin-bottom: 2rem;
  width: 500px;
  height: 100vw;
  max-height: 500px;
  border-radius: 5px;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey};
  padding: 5px;
`;

export const ProductDescription = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const ProductPrice = styled.h1`
  font-size: 150%;
  font-weight: regular;
  margin: 10px 0;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 1rem 0;
`;

export const RatingSeparator = styled.div`
  width: 1px;
  height: 20px;
  background-color: ${colors.grey};
`;

export const DeliveryInfoContainer = styled.div`
  border: 1px solid ${colors.grey};
  border-radius: 5px;
`;

export const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  &:first-child {
    border-bottom: 1px solid ${colors.grey};
  }
`;

export const DeliveryText = styled.div`
  margin-left: 1rem;
  p {
    margin: 0.5rem 0;
    &:last-child {
      font-size: 75%;
    }
    u {
      cursor: pointer;
    }
  }
`;

export const BuySectionProd = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  button {
    font-size: 140%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 3rem;
  }
`;

export const RelatedSection = styled.div`
  margin-bottom: 4rem;
`;
