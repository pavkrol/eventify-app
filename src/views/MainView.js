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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainView = () => {
  return (
    <MainViewWrapper>
      <ContentBox />
    </MainViewWrapper>
  );
};

export default MainView;
