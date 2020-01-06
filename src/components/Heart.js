import React, { useState } from "react";
import styled from "styled-components";
import full_heart from "../img/heart.png";
import empty_heart from "../img/empty_heart.png";

const HeartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  button {
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    background-image: url(${props =>
      props.isFull ? full_heart : empty_heart});
    background-size: contain;
    background-position: center;
  }
  :hover:after {
    content: "add artist to your favourites";
    font-family: "Work Sans", sans-serif;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    width: 12rem;
    padding: 0.5rem 0.7rem;
    height: auto;
    background-color: #273147;
    color: #e2f1ff;
    right: -11rem;
    border-radius: 0.3125rem;
  }
`;

const Heart = () => {
  const [isFull, toggleHeart] = useState(false);
  return (
    <HeartWrapper isFull={isFull}>
      <button onClick={() => toggleHeart(!isFull)} />
    </HeartWrapper>
  );
};

export default Heart;
