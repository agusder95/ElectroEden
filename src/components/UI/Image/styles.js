import styled from 'styled-components';

export const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
  background-color: transparent;
  object-fit: ${props => props.$objectfit};
`;