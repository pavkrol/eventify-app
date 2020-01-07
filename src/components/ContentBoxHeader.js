import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Profile from "./Profile";
import HamburgerMenu from "./HamburgerMenu";

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
  @media (max-width: 62.5rem) {
    border-radius: 0;
  }
  @media (max-width: 43rem) {
    padding: 0 2rem;
  }
`;

const ContentBoxHeader = ({ changeScreen, activeScreen }) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <ContentBoxHeaderWrapper>
      <Logo />
      <Navigation
        changeScreen={changeScreen}
        navItems={["search events", "my concerts", "my artists"]}
        activeScreen={activeScreen}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </ContentBoxHeaderWrapper>
  );
};

export default ContentBoxHeader;
