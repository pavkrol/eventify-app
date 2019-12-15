import React from "react";
import styled from "styled-components";
import Loader from "./Loader";
import SearchEvents from "./SearchEvents";

const ContentBoxBodyWrapper = styled.div``;

const ContentBoxBody = ({ activeScreen }) => {
  return (
    <ContentBoxBodyWrapper>
      {activeScreen === "search events" ? <SearchEvents /> : <Loader />}
    </ContentBoxBodyWrapper>
  );
};

export default ContentBoxBody;
