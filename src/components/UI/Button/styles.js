import styled from 'styled-components';
export const ButtonWrapper = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  color: ${(props) => props.$txtcolor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;