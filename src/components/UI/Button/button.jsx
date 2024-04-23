import React from "react";
import { ButtonWrapper } from "./styles";
import { colors } from "../../../assets/styles/colors";

const Button = ({
  className,
  func,
  text,
  width,
  height,
  color,
  txtColor,
  type,
  
}) => {
  return (
    <ButtonWrapper
      className={className}
      onClick={func}
      width={width}
      height={height}
      color={color}
      $txtcolor={txtColor}
      type={type}
    >
      {text}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  color: colors.white,
  txtColor: colors.black,
  width: "100%",
  height: "1rem",
  type: "button",
};

export default Button;
