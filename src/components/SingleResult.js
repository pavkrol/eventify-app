import React from "react";
import styled from "styled-components";
import ArtistThumbnail from "./ArtistThumbnail";
import Heart from "./Heart";

const SingleResultWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SingleResult = () => {
  return (
    <SingleResultWrapper>
      <ArtistThumbnail />
      <Heart />
    </SingleResultWrapper>
  );
};

export default SingleResult;
