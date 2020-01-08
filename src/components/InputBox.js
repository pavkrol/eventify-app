import React from "react";
import styled from "styled-components";

const InputBoxWrapper = styled.div`
  height: 3.75rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e2f1ff;
  font-family: "Work Sans", sans-serif;
  font-weight: 300;
  margin-bottom: 1rem;
  background-color: #1a2433;
  border-radius: 0.3125rem;
  input {
    flex-basis: 70%;
    border: none;
    border-radius: 0.3125rem;
    background-color: #273147;
    color: #e2f1ff;
    padding-left: 1rem;
    height: 2rem;
  }
`;

const InputBox = ({ children }) => {
  return <InputBoxWrapper>{children}</InputBoxWrapper>;
};

export default InputBox;
