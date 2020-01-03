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
      if (artists_list.resultsPage.results.artist.length === 1) {
        searchEvents(
          artists_list.resultsPage.results.artist.id,
          artists_list.resultsPage.results.artist.displayName
        );
      } else {
        chooseQuery(artists_list.resultsPage.results.artist);
      }
    } else if (type === "city") {
      const cities_list = await searchCity(value);
      console.log(cities_list);
      if (cities_list.length === 1) {
        searchEventsByCity(cites_list[0].id);
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

  const getArtistImage = async artistName => {
    const imageResp = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistName}`
    );
    const imageData = await imageResp.json();
    return imageData.picture_small;
  };

  const searchCity = async city => {
    const resp = await fetch(
      `https://api.songkick.com/api/3.0/search/locations.json?query=${city}&apikey=${key}`
    );
    const data = await resp.json();
    const cities_list = data.resultsPage.results.location.map(location => ({
      id: location.metroArea.id,
      name: location.city.displayName,
      country: location.metroArea.country.displayName,
      area: location.metroArea.displayName,
      state:
        location.metroArea.country.displayName === "US" ||
        location.metroArea.country.displayName === "Canada"
          ? location.metroArea.state.displayName
          : null
    }));
    return cities_list;
  };

  const searchEventsByCity = async city_id => {
    setNoResults(false);
    const resp = await fetch(
      `https://api.songkick.com/api/3.0/events.json?apikey=${key}&location=sk:${city_id}`
    );
    const data = await resp.json();
    if (data.resultsPage.totalEntries) {
      const eventsList = data.resultsPage.results.event.map(async event => ({
        id: event.id,
        name: event.displayName,
        date: event.start.date,
        artist: event.performance[0].artist.displayName,
        city: event.location.city,
        venue: event.venue.displayName,
        imageSrc: await getArtistImage(event.performance[0].artist.displayName)
      }));
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
    const imageSrc = await getArtistImage(artist_name);
    if (data.resultsPage.totalEntries) {
      const eventsList = data.resultsPage.results.event.map(event => ({
        id: event.id,
        name: event.displayName,
        date: event.start.date,
        artist: artist_name,
        city: event.location.city,
        venue: event.venue.displayName,
        imageSrc: imageSrc
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
