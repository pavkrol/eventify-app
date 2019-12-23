import React from "react";
import styled from "styled-components";

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 60vw;
    height: 60vh;
    background-color: white;
  }
`;

const Popup = ({ data, chooseQuery }) => {
  return (
    <PopupWrapper>
      <div>{console.log(data)}</div>
    </PopupWrapper>
  );
};

export default Popup;
