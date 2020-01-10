import React from "react";
import styled from "styled-components";

const CloseButtonWrapper = styled.button`
  background-color: #293850;
  color: #e2f1ff;
  border-radius: 0.3125rem;
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  font-family: "Work Sans", sans-serif;
  font-size: 0.8rem;
  justify-content: center;
  align-items: center;
`;

const CloseButton = ({ action }) => {
  return <CloseButtonWrapper onClick={action}>X</CloseButtonWrapper>;
};

export default CloseButton;
