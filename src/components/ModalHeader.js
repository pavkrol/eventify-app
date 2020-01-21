import React from "react";
import styled from "styled-components";

const ModalHeaderWrapper = styled.h2`
  background: #293850;
  border-radius: 0.3125rem;
  color: #fff;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 40rem) {
    font-size: 1.1rem;
  }
`;

const ModalHeader = ({ children }) => {
  return <ModalHeaderWrapper>{children}</ModalHeaderWrapper>;
};

export default ModalHeader;
