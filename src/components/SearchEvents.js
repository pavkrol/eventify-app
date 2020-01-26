import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { firestore } from "../firebase";
import Popup from "./Popup";
import { getArtistImage } from "../utilities";

const SearchEventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.5rem 4.7rem;
  @media (max-width: 43rem) {
    padding: 2rem;
  }
`;

const SearchEvents = () => {
  const [key, setKey] = useState("");
  const [searchResults, setResults] = useState([]);
  const [fetchingData, setFetchingData] = useState(false);
  const [popupOpen, togglePopup] = useState(false);
  const [temporaryData, setTemporaryData] = useState({});
  const [noResults, setNoResults] = useState(false);

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
      const artists_list = await searchArtist(value);
      if (artists_list.resultsPage.totalEntries === 0) {
        setFetchingData(false);
        setNoResults(true);
      } else if (artists_list.resultsPage.results.artist.length === 1) {
        searchEvents(
          artists_list.resultsPage.results.artist[0].id,
          artists_list.resultsPage.results.artist[0].displayName
        );
      } else {
        chooseQuery(artists_list.resultsPage.results.artist);
      }
    } else if (type === "city") {
      const cities_list = await searchCity(value);
      if (cities_list.length === 1) {
        searchEventsByCity(cities_list[0].id);
      } else if (cities_list.length === 0) {
        setFetchingData(false);
        setNoResults(true);
      } else {
        chooseQuery(cities_list);
      }
    }
  };

  const searchArtist = async artistName => {
    const resp = await fetch(
      `https://api.songkick.com/api/3.0/search/artists.json?apikey=${key}&query=${artistName}`
    );
    const data = await resp.json();
    return data;
  };

  const searchCity = async city => {
    const resp = await fetch(
      `https://api.songkick.com/api/3.0/search/locations.json?query=${city}&apikey=${key}`
    );
    const data = await resp.json();
    const cities_list = data.resultsPage.totalEntries
      ? data.resultsPage.results.location.map(location => ({
          id: location.metroArea.id,
          name: location.city.displayName,
          country: location.metroArea.country.displayName,
          area: location.metroArea.displayName,
          state:
            location.metroArea.country.displayName === "US" ||
            location.metroArea.country.displayName === "Canada"
              ? location.metroArea.state.displayName
              : ""
        }))
      : [];
    return cities_list;
  };

  const searchEventsByCity = async city_id => {
    setNoResults(false);
    const resp = await fetch(
      `https://api.songkick.com/api/3.0/events.json?apikey=${key}&location=sk:${city_id}`
    );
    const data = await resp.json();
    if (data.resultsPage.totalEntries) {
      const eventsList = data.resultsPage.results.event.map(event => {
        return {
          id: event.id,
          name: event.displayName,
          date: event.start.date,
          artist: event.performance.length
            ? event.performance[0].artist.displayName
            : "TBA",
          artistId: event.performance.length
            ? event.performance[0].artist.displayName
            : "n/a",
          city: event.location.city,
          venue: event.venue.displayName,
          uri: event.uri
        };
      });
      setResults(eventsList);
      setFetchingData(false);
    } else {
      setFetchingData(false);
      setNoResults(true);
    }
  };

  const searchEvents = async (artist_id, artist_name) => {
    setNoResults(false);
    const resp = await fetch(
      `https://api.songkick.com/api/3.0/artists/${artist_id}/calendar.json?apikey=${key}`
    );
    const data = await resp.json();
    if (data.resultsPage.totalEntries) {
      const eventsList = data.resultsPage.results.event.map(event => ({
        id: event.id,
        name: event.displayName,
        date: event.start.date,
        artist: artist_name,
        city: event.location.city,
        venue: event.venue.displayName,
        uri: event.uri,
        artistId: artist_id
      }));
      setResults(eventsList);
      setFetchingData(false);
    } else {
      setFetchingData(false);
      setNoResults(true);
    }
  };

  const chooseQuery = data => {
    setTemporaryData(data);
    togglePopup(!popupOpen);
  };

  const confirmChoice = async (id, name, type) => {
    togglePopup(!popupOpen);
    type === "artist" ? searchEvents(id, name) : searchEventsByCity(id);
  };

  return (
    <SearchEventsWrapper>
      <SearchBar search={search} />
      <SearchResults
        searchResults={searchResults}
        fetchingData={fetchingData}
        noResults={noResults}
      />
      {popupOpen && (
        <Popup data={temporaryData} confirmChoice={confirmChoice} />
      )}
    </SearchEventsWrapper>
  );
};

export default SearchEvents;
