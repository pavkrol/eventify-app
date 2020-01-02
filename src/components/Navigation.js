import React from "react";
import styled from "styled-components";

const NavigationWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const Navigation = ({ navItems, changeScreen, activeScreen }) => {
  return (
    <NavigationWrapper>
      {navItems.map(item => (
        <li key={item}>
          <NavItem
            isActive={item === activeScreen ? true : false}
            onClick={() => changeScreen(item)}
          >
            {item}
          </NavItem>
        </li>
      ))}
    </NavigationWrapper>
  );
};

export default Navigation;
