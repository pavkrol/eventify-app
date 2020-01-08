import React from "react";
import styled from "styled-components";
import background from "../img/background.jpg";
import ContentBox from "../components/ContentBox";

const MainViewWrapper = styled.section`
  min-height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  padding: 5vh 0;
  @media (max-width: 62.5rem) {
    padding: 0;
  }
`;

const MainView = ({ toggleAuthModal }) => {
  return (
    <MainViewWrapper>
      <ContentBox toggleAuthModal={toggleAuthModal} />
    </MainViewWrapper>
  );
};

export default MainView;
