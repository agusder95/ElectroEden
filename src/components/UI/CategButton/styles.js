import styled from 'styled-components';
import { colors } from '../../../assets/styles/colors';

export const CategoryBtnWrapper = styled.button`
  /* width:100px;
  height:100px; */
  background-color: ${colors.white};
  border-radius: 5px;
  border: 1px solid ${colors.grey};
  margin:10px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 320px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: 1024px) {
    width: 150px;
    height: 150px;
  }
`;

export const TxtCategory = styled.p`
  margin-top: 1rem;
`;
