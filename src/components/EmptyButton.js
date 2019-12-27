import React from "react";
import styled from "styled-components";

const EmptyButton = ({ width, height, color, action, children }) => {
  const EmptyButtonWrapper = styled.button`
    width: ${width}rem;
    height: ${height}rem;
    background-color: transparent;
    border: 1px solid ${color};
    border-radius: 0.3125rem;
    color: ${color};
    font-family: "Work Sans", sans-serif;
    font-weight: 500;
    letter-spacing: 0.1em;
    :hover {
      background-color: ${color};
      color: #000;
    }
  `;

  return <EmptyButtonWrapper onClick={action}>{children}</EmptyButtonWrapper>;
};

export default EmptyButton;
