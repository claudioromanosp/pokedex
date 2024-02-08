import styled from "styled-components";
import { breakpoint,colors } from "../Variables";

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
      height: 600px;
      
      scrollbar-color: ${(props) => `${colors.red} ${colors.white}` };
      overflow: hidden;
      overflow-y: scroll;
    }
    section {
      margin-bottom: 60px;
    }
  }
  @media (min-width: ${(props) => breakpoint.md}px) {
    &.aside-left {
      width: 16%;
    }
    &.aside-right {
      width: 83%;
    }
    section {
      margin-bottom: 60px;
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
