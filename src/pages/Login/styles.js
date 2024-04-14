import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const LoginWrapper = styled.div`
  min-height: 80vh;
  margin:1rem 0;
  padding:10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    width: fit-content;
  }
`;

export const LoginCountainer = styled.div`
  border: 1px solid ${colors.grey};
  border-radius: 5px;
  width: 100%;
  max-width: 700px;
`;

export const LoginFormCountainer = styled.div`
  margin: 3rem 2rem;
  text-align: center;
`;

export const RegisterFormCountainer = styled.div`
  margin: 3rem 2rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  p {
    color: ${colors.red};
    margin-top: .5rem;
  }
  .formBtn{
    margin-top:1.5rem;
  }
  
`;

export const InputForm = styled.input`
  height: 2.5rem;
  width: 100%;
  margin-top: 1.5rem;
  padding: 0 2rem 0 10px;
  border-radius: 5px;
  border: ${props=> props.$borderColor ?  `2px solid ${colors.red}` : `1px solid ${colors.grey}`};
`;

export const SeeIconBtn = styled.button`
  position: absolute;
  right:10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const PassContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  input{
    margin:0;
  } 
`;

export const LogPContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top:10px;
  p{
    cursor: pointer;
    &:last-child{
      border-bottom: 1px solid ${colors.black};
      padding: 0 5px 3px;
      font-size:110%;
    }
  }
`;

export const CheckBoxReg = styled.div`
  display:flex;
  align-self:flex-end;
  align-items:center;
  margin:1rem 0;
  input{
    margin-left:5px;
  }
`;