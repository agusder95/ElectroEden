import styled from 'styled-components';
import { colors } from '../../../assets/styles/colors';

export const InputQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: ${({height})=>height};
  width: ${({width})=>width};
  border:none;
`;

export const InputQ = styled.div`
  padding: 5px 10px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border:1px solid ${colors.grey};
  border-radius: 5px;
  font-size:150%;
`;

export const InputQBtn = styled.button`
  width: 40px;
  height:100%;
  position: absolute;
  border:1px solid ${colors.grey};
  
  p{
     font-size: 170%;
  }
  
  &:first-child{
    left: 0;
    border-radius: 5px 0 0 5px;
    background-color: ${colors.white};
  }
  &:last-child{
    right: 0;
    border-radius: 0 5px 5px 0;
    color: ${colors.white};
    background-color: ${colors.red};
  }
`;