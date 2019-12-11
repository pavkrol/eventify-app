import React from "react";
import styled from "styled-components";

const ProfileWrapper = styled.button`
  font-family: "Work Sans";
  font-size: 0.875rem;
  height: 2.4rem;
  min-width: 7.5rem;
  padding: 0 1em;
  color: #e2f1ff;
  background-color: #1f2c3e;
  border-radius: 0.3125rem;
`;

const Profile = () => {
  return <ProfileWrapper>Profile</ProfileWrapper>;
};

export default Profile;
