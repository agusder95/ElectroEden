import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const HeaderWrapper = styled.header`
  background-color: ${colors.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid ${colors.black};
  height: 90px;
`;

export const LogoCountainer = styled.div`
  height: 50px;
  cursor: pointer;
`;

export const UserCountainer = styled.div`
  width: 8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content:flex-end;
`;

export const IconCountainer = styled.div`
  width: 7rem;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;


export const HMenuCountainer = styled.div`
 
`;