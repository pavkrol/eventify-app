import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Profile from "./Profile";

const ContentBoxHeaderWrapper = styled.header`
  display: flex;
  height: 5rem;
  padding: 0 5rem;
  align-items: center;
  justify-content: flex-end;
  background-color: #162233;
  border-radius: 0.625rem 0.625rem 0 0;
  h1 {
    margin-right: auto;
  }
`;

const ContentBoxHeader = ({ changeScreen, activeScreen }) => {
  return (
    <ContentBoxHeaderWrapper>
      <Logo />
      <Navigation
        changeScreen={changeScreen}
        navItems={["search events", "my concerts", "my artists"]}
        activeScreen={activeScreen}
      />
      <Profile />
    </ContentBoxHeaderWrapper>
  );
};

export default ContentBoxHeader;
