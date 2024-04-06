import styled from 'styled-components';
import { colors } from '../../../assets/styles/colors';

export const BannerWrapper = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;
  position:relative;
  margin-top: 2rem;
`;

export const BannerButtonCountainer = styled.div`
  position: absolute;
  z-index: 1;
  padding: 0 10px;
  width: 100%;
  max-height:3rem;
  height:30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

export const BannerButton = styled.button`

  border-radius: 50%;
  padding:5px;
  height:100%;
  border: none;
  background-color: ${colors.transparentButton};
  cursor: pointer;
`;

export const CarouselBanner = styled.div`
  display: flex;
  transition: transform 1s ease;
  transform: translateX(${props => props.$translatevalue}%);
`;

export const PointBannerContainer = styled.div`
  width:6rem;
  display: flex;
  justify-content: space-around;  
  position: absolute;
  bottom: 10px;
`;

export const PointBanner = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.$active ? colors.red : colors.white};
  cursor: pointer;
`;





