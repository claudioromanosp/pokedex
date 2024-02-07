import styled from "styled-components";
import { breakpoint } from "../Variables";

export const ContainerFluidS = styled.div`
  width: 100%;
`;

function ContainerFluid({ className, children }) {
  return (
    <ContainerFluidS className={`container-fluid ${className}`}>
      {children}
    </ContainerFluidS>
  );
}

export default ContainerFluid;
