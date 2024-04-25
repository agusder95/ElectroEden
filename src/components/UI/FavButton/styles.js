import styled from 'styled-components';
import { colors } from '../../../assets/styles/colors';

export const FavButtonWrapper = styled.button`
     border: 1px solid ${colors.grey};
     background-color: ${colors.white};
     border-radius: 5px;
     padding:5px;
     width: 30px;
     height: 30px;
     display: flex;
     justify-content: center;
     align-items: center;
`;