import React, { useState, useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { UserContext } from "../providers/UserProvider";
import Alert from "./Alert";
import styled from "styled-components";
import ArtistThumbnail from "./ArtistThumbnail";
import Heart from "./Heart";
import ResultsDataBox from "./ResultsDataBox";
import EmptyButton from "./EmptyButton";
import { getArtistImage } from "../utilities";
import { addEventToCalendar } from "../firebase";

const SingleResult = ({ data }) => {
  const resultRef = useRef(null);
  const [alert, setAlert] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const user = useContext(UserContext);
  const toggleAlert = () => {
    setAlert(!alert);
  };

  const handleAddToCalendar = () => {
    user ? addEventToCalendar(user.uid, data) : toggleAlert();
  };

  useEffect(() => {
    const fetchImageSource = async () => {
      const image = await getArtistImage(data.artist);
      setImageSrc(image);
    };
    fetchImageSource();
  }, []);

  useEffect(() => {
    gsap.set(resultRef.current, {
      opacity: 0,
      y: -20,
      visibility: "visible"
    });
    gsap.to(resultRef.current, { duration: 0.5, opacity: 1, y: 0 });
  }, []);

  return (
    <SingleResultWrapper ref={resultRef}>
      {alert && (
        <Alert action={toggleAlert}>
          You need to be logged in to add artist to favourites
        </Alert>
      )}
      <ArtistThumbnail source={imageSrc} />
      <Heart artistId={data.artistId} artistName={data.artist} />
      <ResultsDataBox data={[data.artist, data.name]} />
      <ResultsDataBox data={[data.city, data.venue]} />
      <ResultsDataBox data={[data.date]} />
      <EmptyButton height="2.5" color="#E2F1FF" action={handleAddToCalendar}>
        Add to calendar
      </EmptyButton>
      <TicketsLink href={data.uri}>Buy ticket</TicketsLink>
    </SingleResultWrapper>
  );
};

export default SingleResult;

const SingleResultWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 3.75rem 5rem 1fr 1fr 9rem 9rem 9rem;
  grid-column-gap: 1rem;
  padding-bottom: 1.5rem;
  margin-top: 1.5rem;
  border-bottom: 0.5px solid #a5abbd50;
  visibility: hidden;
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
