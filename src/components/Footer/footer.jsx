import React from "react";
import {
  FooterButton,
  FooterInput,
  FooterLi,
  FooterSection,
  FooterWrapper,
} from "./styles";
import { IconContext } from "react-icons";
import { CiPaperplane } from "react-icons/ci";
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSection>
        <FooterLi>
          <h4><u>Exclusive</u></h4>
        </FooterLi>
        <FooterLi>
          <p>Get 10% off on your first order</p>
        </FooterLi>
        <FooterLi>
          <FooterInput type="email" placeholder="Enter your email" />
          <FooterButton>
            <IconContext.Provider value={{ color: "white", size: "2rem" }}>
              <CiPaperplane />
            </IconContext.Provider>
          </FooterButton>
        </FooterLi>
      </FooterSection>
      <FooterSection>
        <FooterLi>
          <h4><u>Information</u></h4>
        </FooterLi>
        <FooterLi>
          <p>About Us</p>
        </FooterLi>
        <FooterLi>
          <p>Delivery Information</p>
        </FooterLi>
        <FooterLi>
          <p>Privacy Policy</p>
        </FooterLi>
        <FooterLi>
          <p>Terms & Conditions</p>
        </FooterLi>
        <FooterLi>
          <p>FAQ</p>
        </FooterLi>
      </FooterSection>
      <FooterSection>
        <FooterLi>
          <h4><u>My Account</u></h4>
        </FooterLi>
        <FooterLi>
          <p>My Account</p>
        </FooterLi>
        <FooterLi>
          <p>Order History</p>
        </FooterLi>
        <FooterLi>
          <p>Wish List</p>
        </FooterLi>
        <FooterLi>
          <p>Newsletter</p>
        </FooterLi>
      </FooterSection>
      <FooterSection>
        <FooterLi>
          <h4><u>Customer Service</u></h4>
        </FooterLi>
        <FooterLi>
          <p>Contact Us</p>
        </FooterLi>
        <FooterLi>
          <p>Returns</p>
        </FooterLi>
        <FooterLi>
          <p>Site Map</p>
        </FooterLi>
      </FooterSection>
      <FooterSection>
        <FooterLi>
          <h4><u>Developed by</u></h4>
        </FooterLi>
        <FooterLi>
          <p>De Robles Agustin</p>
        </FooterLi>
        <FooterLi>
          <a href="https://www.linkedin.com/in/agustin-de-robles-62a965214/" target="_blank" >LinkedIn</a>
        </FooterLi>
        <FooterLi>
          <a href="https://github.com/agusder95" target="_blank" >Github</a>
        </FooterLi>
        
      </FooterSection>

    </FooterWrapper>
  );
};

export default Footer;
