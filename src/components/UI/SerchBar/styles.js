import styled from "styled-components";

export const SerchBarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  height: 35px;
  width: 200px;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 0 25px 0 10px;
`;

export const IconButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  right: 0;
`;
