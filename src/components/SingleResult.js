import React from "react";
import styled from "styled-components";
import ArtistThumbnail from "./ArtistThumbnail";
import Heart from "./Heart";
import ResultsDataBox from "./ResultsDataBox";
import EmptyButton from "./EmptyButton";
import BasicButton from "./BasicButton";

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
  :last-child {
    border-bottom: none;
  }
`;

const SingleResult = ({ data }) => {
  return (
    <SingleResultWrapper>
      <ArtistThumbnail />
      <Heart />
      <ResultsDataBox data={[data.artist, data.name]} />
      <ResultsDataBox data={[data.city, data.venue]} />
      <ResultsDataBox data={[data.date]} />
      <EmptyButton
        height="2.5"
        color="#E2F1FF"
        action={() => console.log("add to calendar")}
      >
        Add to calendar
      </EmptyButton>
      <BasicButton
        height="2.5"
        color="#0093FF"
        action={() => console.log("buy ticket")}
      >
        Buy ticket
      </BasicButton>
    </SingleResultWrapper>
  );
};

export default SingleResult;
