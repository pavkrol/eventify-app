import React from "react";
import CurrentUser from "./CurrentUser";
import SignInAndSignUp from "./SignInAndSignUp";
import styled from "styled-components";

const AuthenticationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: #000;
`;

const Authentication = ({ user, loading, toggleAuthModal }) => {
  if (loading) return null;
  return (
    <AuthenticationWrapper>
      {user ? (
        <CurrentUser {...user} toggleAuthModal={toggleAuthModal} />
      ) : (
        <SignInAndSignUp />
      )}
    </AuthenticationWrapper>
  );
};

export default Authentication;
