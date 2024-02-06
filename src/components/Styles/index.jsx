import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1030px;
`;

export const ButtonTag = styled.div`
  display: inline-block;
  padding: 5px;
  margin: 5px;
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
`;

export const Nav = styled.div`
  width: 100%;
  @media(min-width: 1200px){
    float: left;
    max-width: 180px;
    height: 100vw;
  }
`;


