import React from "react";
import Modal from "../Modal";
import loadingGif from "./loading.gif";
import { LoadingGif } from "../../components/Styles";

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
