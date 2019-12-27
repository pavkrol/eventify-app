import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { firestore } from "../firebase";
import Popup from "./Popup";

const SearchEventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.5rem 4.7rem;
`;

const SearchEvents = () => {
  const [key, setKey] = useState("");
  const [searchResults, setResults] = useState("");
  const [fetchingData, setFetchingData] = useState(false);
  const [popupOpen, togglePopup] = useState(false);
  const [temporaryData, setTemporaryData] = useState({});

  useEffect(() => {
    const getKey = async () => {
      const result = await (
        await firestore.collection("songkick").get()
      ).docs[0].data().key;
      setKey(result);
    };
    getKey();
  }, []);

  const search = async (type, value) => {
    setFetchingData(true);
    if (type === "artist") {
      const resp = await fetch(
        `https://api.songkick.com/api/3.0/search/artists.json?apikey=${key}&query=${value}`
      );
      const data = await resp.json();
      if (data.resultsPage.results.artist.length === 1) {
        setResults(data);
      } else {
        setTemporaryData(data);
        togglePopup(!popupOpen);
      }
    }
    setFetchingData(false);
  };

  const chooseQuery = finalData => {
    setResults(finalData);
    togglePopup(!popupOpen);
    console.log(finalData);
  };

  return (
    <SearchEventsWrapper>
      <SearchBar search={search} />
      <SearchResults
        searchResults={searchResults}
        fetchingData={fetchingData}
      />
      {popupOpen && <Popup data={temporaryData} chooseQuery={chooseQuery} />}
    </SearchEventsWrapper>
  );
};

export default SearchEvents;
