import React from "react";
import styled from "styled-components";
import ContentBoxBody from "./ContentBoxBody";
import ContentBoxHeader from "./ContentBoxHeader";

const ContentBoxWrapper = styled.section`
  width: 85%;
  min-height: 80vh;
  border-radius: 0.625rem;
  background: linear-gradient(168.28deg, #151e2c 67.82%, #1a3856 93.99%);
  display: flex;
  flex-direction: column;
`;

const ContentBox = () => {
  return (
    <ContentBoxWrapper>
      <ContentBoxHeader />
      <ContentBoxBody />
    </ContentBoxWrapper>
  );
};

export default ContentBox;
