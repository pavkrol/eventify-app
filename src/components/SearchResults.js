import React from "react";
import Loader from "./Loader";
import styled from "styled-components";
import ResultsTable from "./ResultsTable";

const SearchResultsWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SearchResults = ({ searchResults, fetchingData }) => {
  return (
    <SearchResultsWrapper>
      {fetchingData ? (
        <Loader />
      ) : (
        <ResultsTable searchResults={searchResults} />
      )}
    </SearchResultsWrapper>
  );
};

export default SearchResults;
