import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const NavigationWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    font-family: "Work Sans";
    font-size: 0.875rem;
    color: #e2f1ff;
    text-transform: uppercase;
    margin-right: 2em;
    letter-spacing: 0.1rem;
    :hover {
      color: #fff;
    }
  }
`;

const Navigation = ({ navItems }) => {
  return (
    <NavigationWrapper>
      {navItems.map(item => (
        <li key={item}>
          <Link to="/">{item}</Link>
        </li>
      ))}
    </NavigationWrapper>
  );
};

export default Navigation;
