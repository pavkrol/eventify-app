import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "../providers/UserProvider";
import { addFavourites } from "../firebase";
import Alert from "./Alert";
import full_heart from "../img/heart.png";
import empty_heart from "../img/empty_heart.png";
import { Transition } from "react-transition-group";
import gsap from "gsap";

const HeartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  > button {
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    background-image: url(${props =>
      props.isFull ? full_heart : empty_heart});
    background-size: contain;
    background-position: center;
  }
`;

const Heart = ({ artistId, artistName }) => {
  const [isFull, toggleHeart] = useState(false);
  const [alert, setAlert] = useState(false);
  const user = useContext(UserContext);

  const toggleAlert = () => {
    setAlert(!alert);
  };

  const handleAddToFavourites = (uid, artistId, artistName) => {
    toggleHeart(!isFull);
    addFavourites(uid, artistId, artistName);
  };

  useEffect(() => {
    if (user && user.favouriteArtists && user.favouriteArtists.length) {
      user.favouriteArtists.find(artist => artist.id === artistId)
        ? toggleHeart(true)
        : toggleHeart(false);
    }
  });

  return (
    <HeartWrapper isFull={isFull}>
      <Transition
        timeout={400}
        mountOnEnter
        unmountOnExit
        in={alert}
        addEndListener={(node, done) => {
          gsap.to(node, {
            duration: 0.4,
            y: alert ? 0 : -20,
            autoAlpha: alert ? 1 : 0,
            onComplete: done
          });
        }}
      >
        <Alert action={toggleAlert}>
          You need to be logged in to add artist to favourites
        </Alert>
      </Transition>
      <button
        onClick={() => {
          user
            ? handleAddToFavourites(user.uid, artistId, artistName)
            : toggleAlert();
        }}
      />
    </HeartWrapper>
  );
};

export default Heart;
