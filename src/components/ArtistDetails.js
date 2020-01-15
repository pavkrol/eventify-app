import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { KeyContext } from "../providers/KeyProvider";
import { getArtistImage } from "../utilities";
import Loader from "./Loader";

const ArtistDetailsWrapper = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 10rem 1fr 2fr;
  grid-template-rows: 10rem auto;
`;

const ArtistDetails = ({ artist }) => {
  const [isLoading, setLoading] = useState(false);
  const key = useContext(KeyContext);
  const [artistImage, setArtistImage] = useState("");

  useEffect(() => {
    setLoading(true);
    const getImage = async () => {
      const image = await getArtistImage(artist.name);
      setArtistImage(image);
      setLoading(false);
    };
    getImage();
  }, []);

  return (
    <ArtistDetailsWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <img src={artistImage} alt={artist.name + " image"} />
      )}
      <p>{artist.id}</p>
      <p>{artist.name}</p>
    </ArtistDetailsWrapper>
  );
};

export default ArtistDetails;
