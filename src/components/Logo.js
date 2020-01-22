import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.h1`
  display: block;
  width: 12rem;
  position: relative;
  font-family: "Rubik", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #b4c0de;
  letter-spacing: 0.1em;
  padding-left: 1em;
  height: 2.5em;
  line-height: 5rem;
  background: linear-gradient(
    180deg,
    #e2f1ff 0%,
    rgba(180, 192, 222, 0.24) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  :before {
    content: "";
    display: block;
    position: absolute;
    width: 0.625em;
    height: 1.25em;
    top: 25%;
    left: 0;
    background: linear-gradient(
      180deg,
      #e2f1ff 0%,
      rgba(180, 192, 222, 0.24) 100%
    );
    border-radius: 2.25em 0px;
  }
  @media (max-width: 25rem) {
    font-size: 1.5rem;
    line-height: 3.75rem;
  }
`;

const Logo = () => {
  return <LogoWrapper>eventify</LogoWrapper>;
};

export default Logo;
