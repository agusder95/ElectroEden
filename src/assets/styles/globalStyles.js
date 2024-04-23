import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import '../styles/fonts.css';
export const GlobalStyle = createGlobalStyle`
     * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family:'Inter', sans-serif;
     }
     
     body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Nunito', sans-serif;  /* Changue FF */
          scroll-behavior: smooth;
          background-color: ${colors.white};
          
          @media screen and (min-width: 320px) {
               font-size: 12px;
          }
          @media screen and (min-width: 768px) {
               font-size: 14px;
          }
          @media screen and (min-width: 1024px) {
               font-size: 15px;
          }
          
     }
     
     ul,ol{
        list-style-type: none;
     }
    
     a{
        text-decoration: none;
        color: inherit;
     }

     button{
        cursor: pointer;
     }
     h1, h2, h3{
          font-weight:400;
     }
`;
