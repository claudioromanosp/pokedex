import styled from "styled-components";
import { breakpoint } from "../Variables";

const AsideLeftRight = styled.div`
  width: 100%;
  float: left;
  padding: 0 10px;
  h3 {
    margin-bottom: 20px;
  }
  section {
    width: 100%;
    margin-bottom: 20px;
  }
  @media (min-width: ${(props) => breakpoint.sm}px) {
    &.aside-left {
      min-height: 100vh;
      width: 20%;
    }
    &.aside-right {
      width: 80%;
    }
    section {
      margin-bottom: 60px;
    }
  }

  @media (min-width: 1100px) {
    &.aside-left,
    &.aside-right {
      width: 20%;
    }

    &.aside-right {
      width: 80%;
    }
  }
`;


function Aside({  children, className }) {
  return (
    <AsideLeftRight className={className}>
      {children}
    </AsideLeftRight>
  );
}

export default Aside;
