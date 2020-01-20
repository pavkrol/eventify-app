import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import defaultImage from "../img/default.jpg";

const ArtistThumbnailImage = styled.img`
  object-fit: contain;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.3rem;
`;

const ArtistThumbnail = ({ source }) => {
  return <ArtistThumbnailImage src={source || defaultImage} />;
};

export default ArtistThumbnail;

ArtistThumbnail.propTypes = {
  source: PropTypes.string
};

ArtistThumbnail.defaultProps = {
  source: defaultImage
};
