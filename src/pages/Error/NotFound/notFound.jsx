import React from "react";
import { NotFoundWrapper } from "./styles";
import Button from "../../../components/UI/Button/button";
import { colors } from "../../../assets/styles/colors";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Button
        text={"Back To Home"}
        func={() => (window.location.href = "/")}
        color={colors.red}
        txtColor={colors.white}
        width={"180px"}
        height={"50px"}
      />
    </NotFoundWrapper>
  );
};

export default NotFound;
