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
   display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 10px;
  background-color: ${(props) => colors.light_gray};
`;

export const SubtitleH2 = styled.h2`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 15px;
  color: ${(props) => colors.font};
`;

export const SubtitleH3 = styled.h3`
  font-weight: 300;
  color: ${(props) => colors.font};
  font-size: 16px;
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

export const SearchInput = styled.input`
  padding: 15px;
  border: none;
  width: 100%;
  border-radius: 40px;
  margin-bottom: 20px;
  background-color: ${(props) => colors.light_gray};
  @media (min-width: ${(props) => breakpoint.sm}px) {
    width: 380px;
  }
`;






