import styled from 'styled-components';
import { colors } from '../../../assets/styles/colors';

export const ButtonWrapper = styled.button`
  width: ${(props) => props.width};
  min-width : 178px;
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  color: ${(props) => props.$txtcolor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:active{
    background-color: ${colors.white};
    color:${colors.blackSoft};
  }
`;