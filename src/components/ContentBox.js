import React, { useState } from "react";
import styled from "styled-components";
import ContentBoxBody from "./ContentBoxBody";
import ContentBoxHeader from "./ContentBoxHeader";

const ContentBoxWrapper = styled.section`
  width: 90%;
  min-height: 90vh;
  border-radius: 0.625rem;
  background: linear-gradient(168.28deg, #151e2c 67.82%, #1a3856 93.99%);
  display: flex;
  flex-direction: column;
  @media (max-width: 62.5rem) {
    width: 100%;
    min-height: 100vh;
    border-radius: 0;
  }
  @media (min-width: 100rem) {
    width: 95rem;
  }
`;

const ContentBox = ({ toggleAuthModal }) => {
  const [activeScreen, setActiveScreen] = useState("search events");

  const changeScreen = screen => {
    setActiveScreen(screen);
  };
  return (
    <ContentBoxWrapper>
      <ContentBoxHeader
        changeScreen={changeScreen}
        activeScreen={activeScreen}
        toggleAuthModal={toggleAuthModal}
      />
      <ContentBoxBody activeScreen={activeScreen} />
    </ContentBoxWrapper>
  );
};

export default ContentBox;
