import React from "react";
import styled from "styled-components";
import ConcertsCalendar from "./ConcertsCalendar";
import FavouriteArtists from "./FavouriteArtists";
import SearchEvents from "./SearchEvents";

const ContentBoxBodyWrapper = styled.div``;

const ContentBoxBody = ({ activeScreen }) => {
  const renderSwitch = activeScreen => {
    switch (activeScreen) {
      case "search events":
        return <SearchEvents />;
      case "my artists":
        return <FavouriteArtists />;
      case "my concerts":
        return <ConcertsCalendar />;
    }
  };

  return (
    <ContentBoxBodyWrapper>{renderSwitch(activeScreen)}</ContentBoxBodyWrapper>
  );
};

export default ContentBoxBody;
