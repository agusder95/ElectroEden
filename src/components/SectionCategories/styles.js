import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const SCategoriesWrapper = styled.div``;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.5rem 1rem;
`;

export const CategoriesCube = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${colors.red};
  border-radius: 5px;
  border: 1px solid ${colors.grey};
  margin:1rem;
`;
