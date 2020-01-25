import React from "react";
import styled from "styled-components";
import SingleResult from "./SingleResult";
import PropTypes from "prop-types";

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
  h3 {
    width: 100%;
    height: 5rem;
    text-align: center;
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    letter-spacing: 0.1em;
  }
`;

const ResultsTable = ({ searchResults, noResults }) => {
  return (
    <ResultsTableWrapper>
      <h2>Search results:</h2>
      {noResults ? (
        <h3>
          Sorry, but there aren't any upcoming events for this artist/city.
          Please, check if the name you've entered is correct.
        </h3>
      ) : (
        searchResults.map(item => <SingleResult key={item.id} data={item} />)
      )}
    </ResultsTableWrapper>
  );
};

export default ResultsTable;

ResultsTable.propTypes = {
  searchResults: PropTypes.array
};
