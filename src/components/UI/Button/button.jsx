import React from "react";
import { ButtonWrapper } from "./styles";
import { colors } from "../../../assets/styles/colors";

const Button = ({func, text, width, height, color, txtColor}) => {
  return <ButtonWrapper onClick={func} width ={width} height ={height} color={color} $txtcolor={txtColor}>{text}</ButtonWrapper>;
};

Button.defaultProps = {
  color: colors.white,
  txtColor: colors.black,
  width: '100%',
  height: '1rem',
};

export default Button;
