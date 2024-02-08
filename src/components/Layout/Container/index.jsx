import styled from "styled-components";
import { breakpoint } from "../Variables";

export const ContainerMain = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`;

function Container({  children }) {
  return (
    <ContainerMain className="container">
      {children}
    </ContainerMain>
  );
}

export default Container;
