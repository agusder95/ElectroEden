import React from "react";
import {
  HMenuCountainer,
  HeaderWrapper,
  IconCountainer,
  LogoCountainer,
  UserCountainer,
} from "./styles";
import Image from "../UI/Image/image";
import LogoImg from "../../assets/Images/Main/Logo.png";
import { IconContext } from "react-icons";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoCountainer>
        <Image src={LogoImg} alt={"logo"} objectFit={"contain"} />
      </LogoCountainer>
      <UserCountainer>
        <IconCountainer>
          <IconContext.Provider value={{ size: "50%"}}>
            <CiHeart />
            <CiShoppingCart />
            <CiUser />
          </IconContext.Provider>
        </IconCountainer>
        <HMenuCountainer>
          <p>Menu</p>
        </HMenuCountainer>
      </UserCountainer>
    </HeaderWrapper>
  );
};

export default Header;
