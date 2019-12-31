import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ResultsDataBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0 1.5rem;
  p {
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
    line-height: 1.5rem;
    font-size: 0.875rem;
    letter-spacing: 0.16em;
    color: #a5abbd;
  }
  p:first-child {
    color: #e2f1ff;
    font-size: 1rem;
  }
`;

const ResultsDataBox = ({ data }) => {
  return (
    <ResultsDataBoxWrapper>
      {data.map(item => (
        <p key={item}>{item}</p>
      ))}
    </ResultsDataBoxWrapper>
  );
};

export default ResultsDataBox;

ResultsDataBox.propTypes = {
  data: PropTypes.array.isRequired
};
