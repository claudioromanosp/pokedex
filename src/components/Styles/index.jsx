import styled from "styled-components";
import { breakpoint, colors } from "../Layout/Variables";


export const LoadingGif = styled.div`
    width: 200px;
    height: auto;
    left: 50%;
    margin-top: -100px;
    top: 50%;
    margin-left: -100px;
    position: absolute;
`;
export const ModalDiv = styled.div`
  position: fixed;
  background-color: ${(props) => colors.red};
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 9999;
`;

export const CardImage = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => colors.light_gray};
`;

export const SubtitleH2 = styled.h2`
  color: red;
`;

export const SubtitleH3 = styled.h3`
  color: blue;
`;

export const ButtonTag = styled.div`
  display: inline-block;
  padding: 5px 20px;
  margin: 5px;
  border-radius: 20px;
  color: ${(props) => colors.red};
  cursor: pointer;
  border: 1px solid ${(props) => colors.red};
`;





