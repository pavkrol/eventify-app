import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import ContentBoxBody from "./ContentBoxBody";
import ContentBoxHeader from "./ContentBoxHeader";
import { TweenMax } from "gsap";

const ContentBoxWrapper = styled.section`
  width: 90%;
  min-height: 90vh;
  border-radius: 0.625rem;
  background: linear-gradient(168.28deg, #151e2c 67.82%, #1a3856 93.99%);
  display: flex;
  flex-direction: column;
`;

const ContentBox = () => {
  const box = useRef(null);

  return (
    <ContentBoxWrapper ref={box}>
      <ContentBoxHeader />
      <ContentBoxBody />
    </ContentBoxWrapper>
  );
};

export default ContentBox;
