import React from "react";
import styled from "styled-components";
import background from "../img/background.jpg";

const SearchViewWrapper = styled.section`
  min-height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 3rem 10%;
`;

const SearchView = () => {
  return <SearchViewWrapper></SearchViewWrapper>;
};

export default SearchView;
