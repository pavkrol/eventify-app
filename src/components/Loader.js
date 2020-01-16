import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  const blue = useRef(null);
  const red = useRef(null);
  const yellow = useRef(null);
  const green = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      [blue.current, yellow.current],
      0.5,
      { y: 12 },
      { y: -12, yoyo: true, repeat: -1 }
    );

    TweenMax.fromTo(
      [red.current, green.current],
      0.5,
      { y: -12 },
      { y: 12, repeat: -1, yoyo: true }
    );
  }, []);

  return (
    <LoaderWrapper>
      <svg viewBox="0 0 150 33.2" width="90" height="60">
        <circle ref={blue} cx="16.1" cy="16.6" r="16.1" fill="#b4c0de" />
        <circle ref={red} cx="55.2" cy="16.6" r="16.1" fill="#8a96b3" />
        <circle ref={yellow} cx="94.3" cy="16.6" r="16.1" fill="#636f8a" />
        <circle ref={green} cx="133.4" cy="16.6" r="16.1" fill="#3d4962" />
      </svg>
    </LoaderWrapper>
  );
};

export default Loader;
