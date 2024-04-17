import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 2rem;
  min-height: 80vh;
  padding: 10px;
  /* @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  } */
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 10px 1px ${colors.bar};
  -webkit-box-shadow: 0px 0px 10px 1px ${colors.bar};
  -moz-box-shadow: 0px 0px 10px 1px ${colors.bar};
  width: 90%;
  height: 480px;
  padding: 2rem;
  margin-top: 1rem;
  @media screen and (min-width: 1024px) {
    width: 340px;
    margin-top: 0;
    margin-right: 1rem;
  }
`;

export const ListContact = styled.ul`
  li {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }
`;

export const IconContact = styled.div`
  width: 45px;
  height: 45px;
  padding: 5px;
  border-radius: 50%;
  background-color: ${colors.red};
  margin-right: 1rem;
`;

export const ContactSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.grey};
  margin: 0.5rem 0;
`;

export const FormContactContainer = styled.form`
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  padding: 2rem 1rem;
  box-shadow: 0px 0px 10px 1px ${colors.bar};
  -webkit-box-shadow: 0px 0px 10px 1px ${colors.bar};
  -moz-box-shadow: 0px 0px 10px 1px ${colors.bar};
`;

export const ContactFormDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const ContactInput = styled.input`
  height: 2rem;
  border: 1px solid ${colors.grey};
  border: ${props=> props.$borderColor ?  `2px solid ${colors.red}` : `1px solid ${colors.grey}`};
  border-radius: 5px;
  padding: 0 10px;
  margin: 10px 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin: 0 10px;
  }
`;

export const TextArea = styled.textarea`
  width: -webkit-fill-available;
  height: 60%;
  border: ${props=> props.$borderColor ?  `2px solid ${colors.red}` : `1px solid ${colors.grey}`};
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;
