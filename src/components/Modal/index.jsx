import styled from "styled-components";
import { breakpoint, colors } from "../Layout/Variables";

export const ModalDiv = styled.div`
  position: fixed;
  background-color: ${(props) => colors.red};
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 9999;
`;

function Modal({ children }) {
  return <ModalDiv><div className="modal">{children}</div></ModalDiv>;
} 

export default Modal;
