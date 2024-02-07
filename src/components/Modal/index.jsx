import { ModalDiv } from "../../components/Styles";

function Modal({ children }) {
  return <ModalDiv><div className="modal">{children}</div></ModalDiv>;
} 

export default Modal;
