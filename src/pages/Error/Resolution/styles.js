import styled from 'styled-components';
import { colors } from '../../../assets/styles/colors';
export const ResolutionWrapper = styled.div`
  height:100vh;
  background-color: ${colors.blackSoft};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;
  color:${colors.white};
  p{
     margin:1rem .5rem;
     font-size:12px;
  }
  @media screen and (min-width: 320px) {
     display:none;
  }
`;

export const ResimgCountainer = styled.div`
  width:30%;
`;