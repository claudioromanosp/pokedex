import styled from "styled-components";
import { breakpoint } from "../Variables";

export const RowMain = styled.div`
  width: 100%;
  margin: 0 auto;
`;

function Row({ children }) {
  return (
    <RowMain className="row">
      {children}
    </RowMain>
  );
}

export default Row;
