import React from "react";
import styled from "styled-components";

const ChooseQueryWrapper = styled.button`
  display: flex;
  padding: 1rem 2rem;
  background-color: #1a2433;
  border-radius: 0.3125rem;
  width: 50%;
  min-height: 3rem;
  margin-bottom: 0.7rem;
  justify-content: flex-start;
  text-align: left;
  align-items: center;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  font-size: 0.9375rem;
  :hover {
    background-color: #293850;
  }
`;

const ChooseQuery = ({ id, name, action, type }) => {
  const handleClick = (id, name, type) => {
    action(id, name, type);
  };

  return (
    <ChooseQueryWrapper onClick={() => handleClick(id, name, type)}>
      {name}
    </ChooseQueryWrapper>
  );
};

export default ChooseQuery;
