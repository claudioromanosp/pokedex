import React from "react";
import loadingGif from "./loading.webp";
import "./styles.css";

function Loading() {
  return (
    <div className="modal">
      <div className="modal-loading">
        <img src={loadingGif} alt="loading" width="40" id="loading" />
      </div>
    </div>
  );
}

export default Loading;
