import styled from "styled-components";
import { breakpoint } from "../Variables";

export const AsideMain = styled.aside`
`;

function Aside({  children, className }) {
  return (
    <AsideMain className={className}>
      {children}
    </AsideMain>
  );
}

export default Aside;
