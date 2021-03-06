import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ArtistThumbnail from "./ArtistThumbnail";
import Loader from "./Loader";
import { KeyContext } from "../providers/KeyProvider";
import { getArtistImage, getSimilarArtists } from "../utilities";

const SimilarArtistsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2rem 1fr 1fr;
  grid-gap: 1rem;
  h3 {
    grid-column: 1 / 3;
    font-weight: 400;
    font-size: 1.25rem;
  }
  @media (max-width: 82rem) {
    h3 {
      font-size: 1rem;
    }
  }
  @media (max-width: 53rem) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
  @media (max-width: 28rem) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
  @media (max-width: 22rem) {
    grid-template-columns: 1fr;
    grid-template-rows: 2rem repeat(4, 1fr);
    h3 {
      grid-column: 1 / 2;
    }
  }
`;

const SingleArtist = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  img {
    width: 4rem;
    height: 4rem;
  }
  p {
    margin-left: 1rem;
  }
  @media (max-width: 82rem) {
    img {
      width: 3rem;
      height: 3rem;
    }
    p {
      font-size: 0.875rem;
    }
  }
`;

const SimilarArtists = ({ artistId }) => {
  const key = useContext(KeyContext);
  const [similarArtists, setSimilarArtists] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, toggleLoading] = useState(true);

  const asyncHelperFunction = async artistName => {
    return getArtistImage(artistName);
  };

  useEffect(() => {
    const getData = async () => {
      const similarArtistsArray = await getSimilarArtists(artistId, key);
      const similarArtistsShort = similarArtistsArray.slice(0, 4);
      setSimilarArtists(similarArtistsShort);
      return Promise.all(
        similarArtistsShort.map(artist =>
          asyncHelperFunction(artist.displayName)
        )
      );
    };
    getData().then(images => {
      setImages(images);
      toggleLoading(!isLoading);
    });
  }, []);

  return (
    <SimilarArtistsWrapper>
      <h3>Similar Artists:</h3>
      {isLoading ? (
        <Loader />
      ) : (
        similarArtists.map((artist, index) => (
          <SingleArtist key={artist.displayName}>
            <ArtistThumbnail source={images[index]} />
            <p>{artist.displayName}</p>
          </SingleArtist>
        ))
      )}
    </SimilarArtistsWrapper>
  );
};

export default SimilarArtists;
