import React, { useState } from "react";
import styled from "styled-components";
import full_heart from "../img/heart.png";
import empty_heart from "../img/empty_heart.png";

const HeartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  button {
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    background-image: url(${props =>
      props.isFull ? full_heart : empty_heart});
    background-size: contain;
    background-position: center;
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
