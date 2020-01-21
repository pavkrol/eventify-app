import React from "react";
import styled from "styled-components";
import Profile from "./Profile";

const NavigationWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 62.5rem) {
    width: 40%;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    position: absolute;
    padding-top: 5rem;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    background-color: #162233;
    z-index: 5;
    transform: ${props =>
      props.isMenuOpen ? "translateX(0)" : "translateX(100%)"};
  }
  @media (max-width: 37.5rem) {
    width: 100%;
  }
`;

const NavItem = styled.button`
  font-family: "Work Sans";
  font-size: 0.875rem;
  text-transform: uppercase;
  margin-right: 2em;
  letter-spacing: 0.1rem;
  color: ${props => (props.isActive ? "#2BCA91" : "#e2f1ff")};
  :hover {
    color: #fff;
  }
  @media (max-width: 62.5rem) {
    height: 3rem;
    margin-right: 0;
  }
`;

const Navigation = ({
  navItems,
  changeScreen,
  activeScreen,
  isMenuOpen,
  toggleMenu,
  toggleAuthModal
}) => {
  return (
    <NavigationWrapper isMenuOpen={isMenuOpen}>
      {navItems.map(item => (
        <li key={item}>
          <NavItem
            isActive={item === activeScreen ? true : false}
            onClick={() => {
              changeScreen(item);
              toggleMenu(false);
            }}
          >
            {item}
          </NavItem>
        </li>
      ))}
      <Profile toggleMenu={toggleMenu} toggleAuthModal={toggleAuthModal} />
    </NavigationWrapper>
  );
};

export default Navigation;
