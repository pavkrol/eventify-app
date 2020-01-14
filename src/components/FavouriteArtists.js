import React, { useContext, useEffect } from "react";
import { UserContext } from "../providers/UserProvider";
import ArtistDetails from "./ArtistDetails";
import styled from "styled-components";

const FavouriteArtistsWrapper = styled.section`
  font-family: "Work Sans", sans-serif;
  padding: 2.5rem 4.7rem;
  h2 {
    background-color: #1a2433;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e2f1ff;
    height: 4rem;
    font-weight: 500;
    font-size: 1.3rem;
  }
`;

const FavouriteArtists = () => {
  const user = useContext(UserContext);

  useEffect(() => {
    console.log("User", user);
  });

  return (
    <FavouriteArtistsWrapper>
      <h2>Favourite Artists</h2>
      {user.favouriteArtists.map(artist => (
        <ArtistDetails key={artist.id} artist={artist} />
      ))}
    </FavouriteArtistsWrapper>
  );
};

export default FavouriteArtists;
