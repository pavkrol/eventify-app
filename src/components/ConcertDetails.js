import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "../providers/UserProvider";
import { getArtistImage } from "../utilities";
import { removeEventFromCalendar } from "../firebase";
import ResultsDataBox from "./ResultsDataBox";
import ArtistThumbnail from "./ArtistThumbnail";
import Heart from "./Heart";
import Loader from "./Loader";
import BasicButton from "./BasicButton";
import defaultImage from "../img/default.jpg";

const ConcertDetailsWrapper = styled.div`
  margin: 1rem 0;
  padding-bottom: 1rem;
  display: grid;
  align-items: center;
  grid-template-columns: 3.75rem 5rem 1fr 1fr 9rem 9rem 9rem;
  grid-template-rows: 3.75rem;
  grid-column-gap: 1rem;
  padding-bottom: 1.5rem;
  margin-top: 1.5rem;
  border-bottom: 0.5px solid #a5abbd50;
  font-family: "Work Sans", sans-serif;
  color: #e2f1ff;
  :last-child {
    border-bottom: none;
  }
  :last-child {
    border-bottom: none;
  }
  @media (max-width: 68rem) {
    grid-template-columns: 3.75rem 3rem repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 1.2rem;
    *:nth-child(1) {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }
    *:nth-child(2) {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }
    *:nth-child(3) {
      grid-row: 1 / 2;
      grid-column: 3 / 5;
    }
    *:nth-child(4) {
      grid-column: 3 / 4;
      grid-row: 2 / 3;
    }
    *:nth-child(5) {
      grid-column: 4 / 5;
      grid-row: 2 / 3;
    }
    *:nth-child(6) {
      grid-column: 5 / 6;
      grid-row: 1 / 2;
    }
    *:nth-child(7) {
      grid-column: 5 / 6;
      grid-row: 2 / 3;
    }
  }
  @media (max-width: 40rem) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 1;
    *:nth-child(1) {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    *:nth-child(2) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      justify-content: end;
    }
    *:nth-child(3) {
      grid-row: 2 / 3;
      grid-column: 1 / 3;
    }
    *:nth-child(4) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }
    *:nth-child(5) {
      grid-column: 2 / 3;
      grid-row: 3 / 4;
      p {
        width: 100%;
        text-align: right;
      }
    }
    *:nth-child(6) {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
    }
    *:nth-child(7) {
      grid-column: 2 / 3;
      grid-row: 4 / 5;
    }
  }
  @media (max-width: 22rem) {
    grid-gap: 0.5rem;
    grid-template-rows: repeat(3, 1fr) repeat(3, 3rem);
    *:nth-child(1),
    *:nth-child(2) {
      grid-column: span 1;
      grid-row: 1 / 2;
    }
    *:nth-child(3) {
      grid-row: 2 / 3;
      grid-column: 1 / 3;
    }
    *:nth-child(4) {
      grid-column: 1 / 3;
      grid-row: 3 / 4;
    }
    *:nth-child(5) {
      grid-column: 1 / 3;
      grid-row: 4 / 5;
      p {
        width: 100%;
        text-align: left;
      }
    }
    *:nth-child(6) {
      grid-column: 1 / 3;
      grid-row: 5 / 6;
    }
    *:nth-child(7) {
      grid-column: 1 / 3;
      grid-row: 6 / 7;
    }
  }
`;

const TicketsLink = styled.a`
  padding: 0 1.5rem;
  height: 2.5rem;
  background-color: #0093ff;
  border-radius: 0.3125rem;
  color: #fff;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  letter-spacing: 0.1em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  :hover {
    background-color: #0093ff80;
  }
`;

const ConcertDetails = ({ event }) => {
  const [isLoading, setLoading] = useState(true);
  const user = useContext(UserContext);
  const [artistImage, setArtistImage] = useState("");

  useEffect(() => {
    const getArtistData = async () => {
      const image = await getArtistImage(event.artist);
      setArtistImage(image);
      setLoading(false);
    };
    getArtistData();
  }, []);

  return (
    <ConcertDetailsWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <ArtistThumbnail source={artistImage || defaultImage} />
      )}
      <Heart artistId={event.artistId} artistName={event.artist} />
      <ResultsDataBox data={[event.artist, event.name]} />
      <ResultsDataBox data={[event.city, event.venue]} />
      <ResultsDataBox data={[event.date]} />
      <BasicButton
        height="2.4"
        color="#D10D0D"
        action={() => removeEventFromCalendar(user.uid, event.id)}
      >
        Remove
      </BasicButton>
      <TicketsLink href={event.uri}>Buy ticket</TicketsLink>
    </ConcertDetailsWrapper>
  );
};

export default ConcertDetails;
