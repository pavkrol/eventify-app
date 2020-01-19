import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ArtistThumbnail from "./ArtistThumbnail";
import { KeyContext } from "../providers/KeyProvider";
import { getArtistImage, getSimilarArtists } from "../utilities";

const SimilarArtistsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

const SimilarArtists = ({ artistId }) => {
  const key = useContext(KeyContext);
  const [similarArtists, setSimilarArtists] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getSimilarArtists(artistId, key);
      setSimilarArtists(data.slice(0, 4));
      const first = await getArtistImage(data[0].displayName);
      const second = await getArtistImage(data[1].displayName);
      const third = await getArtistImage(data[2].displayName);
      const fourth = await getArtistImage(data[3].displayName);
      setImages([first, second, third, fourth]);
      console.log(first, second, third, fourth);
    };
    getData();
  }, []);

  return (
    <SimilarArtistsWrapper>
      {similarArtists.length &&
        similarArtists.map((artist, index) => (
          <>
            <p>{artist.displayName}</p>
            <ArtistThumbnail source={images[index]} />
          </>
        ))}
    </SimilarArtistsWrapper>
  );
};

export default SimilarArtists;
