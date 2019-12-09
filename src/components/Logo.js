import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.h1`
  position: relative;
  font-family: "Rubik", sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #b4c0de;
  letter-spacing: 3px;
  padding-left: 25px;
  height: 40px;
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
    width: 20px;
    height: 40px;
    left: 0;
    background: linear-gradient(
      180deg,
      #e2f1ff 0%,
      rgba(180, 192, 222, 0.24) 100%
    );
    border-radius: 36px 0px;
  }
`;

const Logo = () => {
  return <LogoWrapper>eventify</LogoWrapper>;
};

export default Logo;
