import styled from "styled-components";
export const NotFoundWrapper = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5rem;
  text-align: center;

  p {
    margin-bottom: 4rem;
    
  }
  @media screen and (min-width: 320px) {
    h1 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 5rem;
      margin-bottom: 2rem;
    }
  }
  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 7rem;
      margin-bottom: 2rem;
    }
  }
`;
