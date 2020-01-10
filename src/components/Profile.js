import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../providers/UserProvider";

const ProfileWrapper = styled.button`
  font-family: "Work Sans";
  font-size: 0.875rem;
  height: 2.4rem;
  min-width: 7.5rem;
  padding: 0 1em;
  color: #e2f1ff;
  background-color: #1f2c3e;
  border-radius: 0.3125rem;
  @media (max-width: 62.5rem) {
    margin-top: 0.8rem;
  }
`;

const Profile = ({ toggleAuthModal }) => {
  const user = useContext(UserContext);

  return (
    <ProfileWrapper onClick={toggleAuthModal}>
      {user ? "Profile" : "Sign In"}
    </ProfileWrapper>
  );
};

export default Profile;
