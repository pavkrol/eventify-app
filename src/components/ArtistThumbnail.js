import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import defaultImage from "../img/note.png";

const ArtistThumbnailImage = styled.img`
  object-fit: contain;
  width: 3.75rem;
  height: 3.75rem;
  background-color: #dcdcdc;
  border-radius: 0.3rem;
  padding: 0.8rem;
`;

const ArtistThumbnail = ({ source }) => {
  return <ArtistThumbnailImage src={source} />;
};

export default ArtistThumbnail;

ArtistThumbnail.propTypes = {
  source: PropTypes.string
};

ArtistThumbnail.defaultProps = {
  source: defaultImage
};
