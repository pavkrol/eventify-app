import React from "react";
import styled from "styled-components";
import SingleResult from "./SingleResult";

const ResultsTableWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    letter-spacing: 0.1em;
    height: 2rem;
    line-height: 2rem;
    text-align: left;
    margin: 1rem 0;
    width: 100%;
  }
`;

const ResultsTable = ({ searchResults }) => {
  return (
    <ResultsTableWrapper>
      <h2>Search results:</h2>
      <SingleResult />
    </ResultsTableWrapper>
  );
};

export default ResultsTable;
