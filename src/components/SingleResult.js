import React from "react";
import styled from "styled-components";
import ArtistThumbnail from "./ArtistThumbnail";
import Heart from "./Heart";
import ResultsDataBox from "./ResultsDataBox";
import EmptyButton from "./EmptyButton";
import BasicButton from "./BasicButton";

const SingleResultWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SingleResult = () => {
  return (
    <SingleResultWrapper>
      <ArtistThumbnail />
      <Heart />
      <ResultsDataBox data={["Artist Name", "Event Name"]} />
      <ResultsDataBox data={["City", "Venue Name"]} />
      <ResultsDataBox data={["10/12/2020"]} />
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
