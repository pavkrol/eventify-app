import React from "react";
import styled from "styled-components";
import Loader from "./Loader";

const ContentBoxBodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBoxBody = () => {
  return (
    <ContentBoxBodyWrapper>
      <Loader />
    </ContentBoxBodyWrapper>
  );
};

export default ContentBoxBody;
