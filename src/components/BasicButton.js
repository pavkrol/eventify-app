import React from "react";
import styled from "styled-components";

const BasicButton = ({ width, height, color, action, children }) => {
  const BasicButtonWrapper = styled.button`
    width: ${width}rem;
    height: ${height}rem;
    background-color: ${color};
    border-radius: 0.3125rem;
    color: #fff;
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    letter-spacing: 0.1em;
    :hover {
      background-color: ${color}80;
    }
  `;

  return <BasicButtonWrapper onClick={action}>{children}</BasicButtonWrapper>;
};

export default BasicButton;
