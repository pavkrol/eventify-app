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
  const [searchResults, setResults] = useState([]);
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
      searchArtist(value);
    }
    setFetchingData(false);
  };

  const searchArtist = async artistName => {
    const resp = await fetch(
      `https://api.songkick.com/api/3.0/search/artists.json?apikey=${key}&query=${artistName}`
    );
    const data = await resp.json();
    if (data.resultsPage.results.artist.length === 1) {
      searchEvents(data.resultsPage.results.artist.id);
    } else {
      chooseQuery(data);
    }
  };

  const searchEvents = async artist_id => {
    console.log(artist_id);
    const resp = await fetch(
      `https://api.songkick.com/api/3.0/artists/${artist_id}/calendar.json?apikey=${key}`
    );
    const data = await resp.json();
    console.log(data);
    if (data.resultsPage.totalEntries) {
      const eventsList = data.resultsPage.results.event.map(event => ({
        id: event.id,
        name: event.displayName,
        date: event.start.date,
        artist: "to do",
        city: event.location.city,
        venue: event.venue.displayName
      }));
      setResults(eventsList);
    } else {
      console.log("there are no events for this artist");
    }
  };

  const chooseQuery = data => {
    setTemporaryData(data);
    togglePopup(!popupOpen);
  };

  const confirmChoice = finalChoice => {
    togglePopup(!popupOpen);
    searchEvents(finalChoice);
  };

  return (
    <SearchEventsWrapper>
      <SearchBar search={search} />
      <SearchResults
        searchResults={searchResults}
        fetchingData={fetchingData}
      />
      {popupOpen && (
        <Popup data={temporaryData} confirmChoice={confirmChoice} />
      )}
    </SearchEventsWrapper>
  );
};

export default SearchEvents;
