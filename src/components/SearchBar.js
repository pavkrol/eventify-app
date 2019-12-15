import React, { useState } from "react";
import styled from "styled-components";
import BasicButton from "./BasicButton";

const SearchBarWrapper = styled.div`
  background-color: #1a2433;
  border-radius: 0.3125rem;
  padding: 0.81rem 3.7rem;
  width: 100%;
  display: flex;
  font-family: "Work Sans", sans-serif;
  font-size: 0.875rem;
  p::first-letter {
    text-transform: uppercase;
  }
  p {
    width: 5rem;
  }
  justify-content: space-between;
  align-items: center;
  select,
  input {
    font-family: "Work Sans", sans-serif;
    flex: 1;
    margin: 0 1rem;
    border: none;
    border-radius: 0.3125rem;
    background-color: #273147;
    color: #e2f1ff;
    padding-left: 1rem;
    height: 2rem;
  }
`;

const SearchBar = ({ search }) => {
  const [searchBy, setSearchBy] = useState("artist");
  const [inputValue, setInputValue] = useState("");

  return (
    <SearchBarWrapper>
      <p>Search by:</p>
      <select onChange={e => setSearchBy(e.target.value)}>
        <option value="artist">Artist</option>
        <option value="city">City</option>
      </select>
      <p>{searchBy}:</p>
      <input onChange={e => setInputValue(e.target.value)} value={inputValue} />
      <BasicButton
        width="7.5"
        height="2.5"
        color="#2BCA91"
        action={() => search(searchBy, inputValue)}
      >
        Search
      </BasicButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;
