import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { KeyContext } from "../providers/KeyProvider";
import { UserContext } from "../providers/UserProvider";
import { getArtistImage } from "../utilities";
import { addFavourites } from "../firebase";
import Loader from "./Loader";
import SimilarArtists from "./SimilarArtists";
import BasicButton from "./BasicButton";
import defaultImage from "../img/default.jpg";

const ArtistDetailsWrapper = styled.div`
  margin: 1rem 0;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 15rem 1fr 1fr;
  grid-template-rows: 15rem auto;
  grid-gap: 1rem 2rem;
  font-family: "Work Sans", sans-serif;
  color: #e2f1ff;
  border-bottom: 0.5px solid #a5abbd50;
  :last-child {
    border-bottom: none;
  }
  .mainPhoto {
    width: 100%;
    height: auto;
    border-radius: 0.375rem;
  }
  @media (max-width: 82rem) {
    grid-template-columns: 10rem 1fr 1fr;
    grid-template-rows: 10rem auto;
  }
  @media (max-width: 53rem) {
    grid-template-columns: 15rem 1fr;
    grid-template-rows: 15rem auto auto;
    button {
      grid-column: 1 / 3;
    }
  }
  @media (max-width: 32rem) {
    grid-template-columns: 10rem 1fr;
    grid-template-rows: 15rem auto auto;
  }
  @media (max-width: 28rem) {
    grid-template-columns: 1fr 4rem;
    grid-template-rows: repeat(3, auto);
    img {
      grid-column: 2 / 3;
    }
  }
`;

const ArtistData = styled.div`
  display: flex;
  flex-direction: column;
  * {
    margin-bottom: 1rem;
  }
  h3 {
    font-weight: 400;
    font-size: 1.25rem;
    height: 2rem;
  }
  h4 {
    font-size: 1rem;
    font-weight: 400;
    span {
      color: #a5abbd;

      font-weight: 300;
    }
  }
  p {
    color: #a5abbd;
    font-size: 1rem;
    font-weight: 300;
  }
  @media (max-width: 82rem) {
    h3 {
      font-size: 1rem;
    }
    h4 {
      font-size: 0.875rem;
    }
    p {
      font-size: 0.875rem;
    }
  }
  @media (max-width: 53rem) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  @media (max-width: 28rem) {
    grid-column: 1 / 2;
  }
`;

const ArtistDetails = ({ artist }) => {
  const [isLoading, setLoading] = useState(false);
  const key = useContext(KeyContext);
  const user = useContext(UserContext);
  const [artistImage, setArtistImage] = useState("");
  const [onTour, setOnTour] = useState("");
  const [upcomingConcerts, setUpcomingConcerts] = useState([]);

  const getEvents = async (artistId, key) => {
    const resp = await fetch(
      `https://api.songkick.com/api/3.0/artists/${artistId}/calendar.json?apikey=${key}`
    );
    const data = await resp.json();
    if (data.resultsPage.totalEntries) {
      const events = data.resultsPage.results.event.map((event, index) => {
        if (index <= 2 && index < data.resultsPage.totalEntries) {
          return {
            city: event.location.city,
            date: event.start.date
          };
        }
      });
      const upcomingEvents =
        data.resultsPage.totalEntries > 2
          ? events.slice(0, 3)
          : events.slice(0, data.resultsPage.totalEntries);
      return upcomingEvents;
    }
  };

  const getOnTourInfo = async (artistName, artistId, key) => {
    const resp = await fetch(
      `https://api.songkick.com/api/3.0/search/artists.json?apikey=${key}&query=${artistName}`
    );
    const data = await resp.json();
    const artist = data.resultsPage.results.artist.filter(
      artist => artist.id === artistId
    );
    return artist[0].onTourUntil;
  };

  useEffect(() => {
    setLoading(true);
    const getArtistData = async () => {
      const image = await getArtistImage(artist.name);
      setArtistImage(image);
      const onTour = await getOnTourInfo(artist.name, artist.id, key);
      setOnTour(onTour);
      const upcomingConcerts = await getEvents(artist.id, key);
      setUpcomingConcerts(upcomingConcerts);
      setLoading(false);
    };
    getArtistData();
  }, []);

  return (
    <ArtistDetailsWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <img
          className="mainPhoto"
          src={artistImage || defaultImage}
          alt={artist.name + " image"}
        />
      )}
      <ArtistData>
        <h3>{artist.name}</h3>
        <h4>
          On tour until: <span>{onTour}</span>
        </h4>
        <h4>Upcoming concerts: </h4>
        {upcomingConcerts.length > 0 ? (
          upcomingConcerts.map((concert, index) => (
            <p key={`${concert.city}/${concert.date}/${index}`}>
              {concert.city} - {concert.date}
            </p>
          ))
        ) : (
          <p>-</p>
        )}
      </ArtistData>
      <SimilarArtists artistId={artist.id}>similar artists</SimilarArtists>
      <BasicButton
        height="2.4"
        color="#D10D0D"
        action={() => addFavourites(user.uid, artist.id, artist.name)}
      >
        Remove
      </BasicButton>
    </ArtistDetailsWrapper>
  );
};

export default ArtistDetails;
