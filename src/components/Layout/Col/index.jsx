import styled from "styled-components";
import { breakpoint } from "../Variables";

export const Column = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: ${(props) => breakpoint.sm}px) {
    width: 50%;
    display: inline-flex;
  }
  @media (min-width: ${(props) => breakpoint.md}px) {
    width: 33.333333%;
  }
  @media (min-width: ${(props) => breakpoint.lg}px) {
    width: 20%
  }
`;

function Col({ children, className }) {
  return (
    <Column className={`col col-sm col-md col-lg col-xlg ${className}`}>
      {children}
    </Column>
  );
}

export default Col;
