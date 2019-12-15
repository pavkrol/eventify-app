import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const SearchEventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.5rem 4.7rem;
`;

const SearchEvents = () => {
  const [searchBy, setSearchBy] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const search = (type, value) => {
    setSearchBy(type);
    setSearchValue(value);
  };

  return (
    <SearchEventsWrapper>
      <SearchBar search={search} />
      <SearchResults searchBy={searchBy} searchValue={searchValue} />
    </SearchEventsWrapper>
  );
};

export default SearchEvents;
