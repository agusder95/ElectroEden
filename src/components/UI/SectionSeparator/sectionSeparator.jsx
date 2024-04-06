import React from "react";
import styled from "styled-components";
import { colors } from "../../../assets/styles/colors";

const SeparatorBarWrapper = styled.div`
  width: 100%;
  border: 1px solid ${colors.bar};
  margin: 2rem 0;
`;

const SeparatorBar = () => {
  return <SeparatorBarWrapper />;
};

export default SeparatorBar;
