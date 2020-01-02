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
`;

const ContentBox = () => {
  const [activeScreen, setActiveScreen] = useState("search events");

  const changeScreen = screen => {
    setActiveScreen(screen);
  };
  return (
    <ContentBoxWrapper>
      <ContentBoxHeader
        changeScreen={changeScreen}
        activeScreen={activeScreen}
      />
      <ContentBoxBody activeScreen={activeScreen} />
    </ContentBoxWrapper>
  );
};

export default ContentBox;
