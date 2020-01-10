import React from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";

const AlertWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 19rem;
    height: 10rem;
    background-color: #1a2433;
    font-family: "Work Sans", sans-serif;
    font-size: 0.875rem;
    line-height: 1.4rem;
    font-weight: 300;
    color: #e2f1ff;
    border-radius: 0.3125rem;
    padding: 1rem;
    text-align: center;
  }
  button {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`;

const Alert = ({ children, action }) => {
  return (
    <AlertWrapper>
      <div>
        {children}
        <CloseButton action={action} />
      </div>
    </AlertWrapper>
  );
};

export default Alert;
