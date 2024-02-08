import styled from "styled-components";
import { breakpoint } from "../Variables";

export const GridS = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  @media (min-width: ${(props) => breakpoint.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${(props) => breakpoint.md}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${(props) => breakpoint.lg}px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

function Grid({ children, className }) {
  return (
    <GridS className={`grid ${className}`}>
      {children}
    </GridS>
  );
}

export default Grid;
