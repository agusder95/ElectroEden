import styled from 'styled-components';
import { colors } from '../../../assets/styles/colors';

export const CategoryBtnWrapper = styled.button`
  background-color: ${props=> props.$active ? colors.red : colors.white};
  border-radius: 5px;
  border: 1px solid ${colors.grey};
  margin:10px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  color:${colors.blackSoft};
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

  &:active{
    border: 3px solid ${colors.red};
    background-color: ${colors.white};
    color: ${colors.grey};
    padding: 15px;
  }
`;

export const TxtCategory = styled.p`
  margin-top: 1rem;
`;
