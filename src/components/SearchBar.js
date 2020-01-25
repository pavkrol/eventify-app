import React, { useState } from "react";
import styled from "styled-components";
import BasicButton from "./BasicButton";
import Alert from "./Alert";

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
  @media (max-width: 62.5rem) {
    padding: 0.5rem 1.5rem;
  }
  @media (max-width: 55rem) {
    flex-wrap: wrap;
    p {
      flex-basis: 30%;
      margin-bottom: 1rem;
    }
    select,
    input {
      flex-basis: 60%;
      margin: 0 0 1rem 0;
    }
    *:last-child {
      flex-basis: 100%;
    }
  }
  @media (max-width: 25rem) {
    p {
      flex-basis: 100%;
      margin-bottom: 1rem;
    }
    select,
    input {
      flex-basis: 100%;
      max-width: 100%;
      margin: 0 0 1rem 0;
    }
  }
`;

const SearchBar = ({ search }) => {
  const [searchBy, setSearchBy] = useState("artist");
  const [inputValue, setInputValue] = useState("");
  const [alert, setAlert] = useState(false);

  const toggleAlert = () => {
    setAlert(!alert);
  };

  return (
    <SearchBarWrapper>
      {alert && (
        <Alert action={toggleAlert}>
          Artist/City field cannot be empty. Please, fill this field and try
          again.
        </Alert>
      )}
      <p>Search by:</p>
      <select onChange={e => setSearchBy(e.target.value)}>
        <option value="artist">Artist</option>
        <option value="city">City</option>
      </select>
      <p>{searchBy}:</p>
      <input onChange={e => setInputValue(e.target.value)} value={inputValue} />
      <BasicButton
        height="2.5"
        color="#2BCA91"
        action={() =>
          inputValue === "" ||
          inputValue === null ||
          !inputValue.replace(/\s/g, "").length
            ? toggleAlert()
            : search(searchBy, inputValue)
        }
      >
        Search
      </BasicButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;
