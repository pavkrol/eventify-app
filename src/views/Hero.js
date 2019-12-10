import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import background from "../img/background.jpg";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

const HeroWrapper = styled.section`
  min-height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 3rem 10%;
`;

const TextWrapper = styled.div`
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: "Lato", sans-serif;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  h3 {
    font-family: "PT Sans Narrow", sans-serif;
    font-weight: 300;
    text-align: center;
    letter-spacing: 0.16em;
    margin-bottom: 2rem;
  }
`;

const StartButton = styled(Link)`
  width: 16em;
  height: 3.125em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid #ffffff;
  border-radius: 1.6em;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  font-size: 1.125rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  :hover {
    background: rgba(255, 255, 255, 0.8);
    color: #000;
  }
  @media (max-width: 37.5rem) {
    width: 12.5em;
    height: 3.125em;
    font-size: 1rem;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <Logo />
      <TextWrapper>
        <h2>Share the joy</h2>
        <h3>and the best moments of your music</h3>
        <StartButton to="search">get started</StartButton>
      </TextWrapper>
      <Footer />
    </HeroWrapper>
  );
};

export default Hero;
