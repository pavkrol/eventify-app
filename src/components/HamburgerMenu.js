import React from "react";
import styled from "styled-components";

const BurgerWrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  @media (min-width: 62.5rem) {
    display: none;
  }
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: #e2f1ff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-child(2) {
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "1")};
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "translateX(20px)" : "translateX(0)"};
    }
    :nth-child(3) {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const Burger = ({ isMenuOpen, toggleMenu }) => {
  return (
    <BurgerWrapper
      isMenuOpen={isMenuOpen}
      onClick={() => toggleMenu(!isMenuOpen)}
    >
      <div />
      <div />
      <div />
    </BurgerWrapper>
  );
};

export default Burger;
