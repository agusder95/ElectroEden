import React from "react";
import {
  HMenuCountainer,
  HeaderWrapper,
  IconCountainer,
  LogoCountainer,
  Menu,
  UserCountainer,
} from "./styles";
import Image from "../UI/Image/image";
import LogoImg from "../../assets/Images/Main/Logo.png";
import { IconContext } from "react-icons";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import Hmenu from "../UI/HMenu/hmenu";
import SerchBar from "../UI/SerchBar/serch";

const MenuItems = () => {
  return (
    <>
      <p>abcde</p>
      <p>efghi</p>
      <p>jklom</p>
      <p>pqrstu</p>
    </>
  );
};

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoCountainer>
        <Image src={LogoImg} alt={"logo"} objectFit={"contain"} />
      </LogoCountainer>
      <UserCountainer>
        {/* Desktop */}
        <Menu>
          <MenuItems />
          <SerchBar />
        </Menu>
        <IconCountainer>
          <IconContext.Provider value={{ size: "25px"}}>
            <CiHeart />
            <CiShoppingCart />
            <CiUser />
          </IconContext.Provider>
          {/* Mobile */}
          <HMenuCountainer>
            <Hmenu>
              <MenuItems />
            </Hmenu>
          </HMenuCountainer>
        </IconCountainer>
      </UserCountainer>
    </HeaderWrapper>
  );
};

export default Header;
