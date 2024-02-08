
import styled from "styled-components";
import { breakpoint, colors } from "../Layout/Variables";
import Modal from "../Modal";
import loadingGif from "./loading.gif";

export const LoadingGif = styled.div`
    width: 200px;
    height: auto;
    left: 50%;
    margin-top: -100px;
    top: 50%;
    margin-left: -100px;
    position: absolute;
`;

function Loading() {
  return (
    <Modal> 
      <LoadingGif>
        <h2 style={{ textAlign: "center", color: "#fff"}}>Pokedex</h2>
        <img src={loadingGif} alt="loading"  id="loading" />
      </LoadingGif>
    </Modal>
  );
  
}

export default Loading;
