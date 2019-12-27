import React from "react";
import styled from "styled-components";
import EmptyButton from "./EmptyButton";

const ChooseQueryWrapper = styled.div`
  display: flex;
  padding: 0 2rem;
  background-color: #1a2433;
  border-radius: 0.3125rem;
  width: 50%;
  height: 3rem;
  margin: 0 1rem 0.7rem 1rem;
  justify-content: space-between;
  align-items: center;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  font-size: 0.9375rem;
`;

const ChooseQuery = ({ id, name, action }) => {
  const handleClick = id => {
    action(id);
  };

  return (
    <ChooseQueryWrapper>
      <p>{name}</p>
      <EmptyButton
        color="#FFF"
        width="6"
        height="2"
        action={() => handleClick(id)}
      >
        Search
      </EmptyButton>
    </ChooseQueryWrapper>
  );
};

export default ChooseQuery;
