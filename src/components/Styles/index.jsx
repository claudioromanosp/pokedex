import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  @media(min-width: 992px){
    max-width: 990px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5px;
  @media(min-width: 600px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media(min-width: 768px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media(min-width: 992px){
    grid-template-columns: repeat(4, 1fr);
  }
  @media(min-width: 1200px){
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid black;
`;


