import React from "react";
import styled from "styled-components";
import background from "../img/background.jpg";
import Logo from "./Logo";
import Footer from "./Footer";

const HeroWrapper = styled.section`
  min-height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 50px 10%;
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
    font-size: 84px;
    text-align: center;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  h3 {
    font-family: "PT Sans Narrow", sans-serif;
    font-weight: 300;
    font-size: 32px;
    text-align: center;
    letter-spacing: 0.16em;
    margin-bottom: 40px;
  }
  button {
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid #ffffff;
    border-radius: 25px;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    :hover {
      background: rgba(255, 255, 255, 0.8);
      color: #000;
    }
  }
  @media (max-width: 1100px) {
    h2 {
      font-size: 68px;
    }
    h3 {
      font-size: 26px;
    }
  }
  @media (max-width: 850px) {
    h2 {
      font-size: 50px;
    }
    h3 {
      font-size: 22px;
    }
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 32px;
    }
    h3 {
      font-size: 18px;
    }
    button {
      width: 200px;
      height: 50px;
      font-size: 16px;
    }
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <Logo />
      <TextWrapper>
        <h2>Share the joy</h2>
        <h3>and the best moments of your music</h3>
        <button>get started</button>
      </TextWrapper>
      <Footer />
    </HeroWrapper>
  );
};

export default Hero;
