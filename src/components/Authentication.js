import React, { useContext, useEffect } from "react";
import CurrentUser from "./CurrentUser";
import SignInAndSignUp from "./SignInAndSignUp";
import { UserContext } from "../providers/UserProvider";
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
  z-index: 20;
  overflow-y: scroll;
  @media (max-width: 40rem) {
    align-items: flex-start;
    padding: 6.5rem 0 1.5rem 0;
  }
`;

const Authentication = ({ toggleAuthModal, openAuthModal }) => {
  const user = useContext(UserContext);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "unset");
  }, []);

  return (
    <AuthenticationWrapper>
      {user ? (
        <CurrentUser {...user} toggleAuthModal={toggleAuthModal} />
      ) : (
        <SignInAndSignUp
          openAuthModal={openAuthModal}
          toggleAuthModal={toggleAuthModal}
        />
      )}
    </AuthenticationWrapper>
  );
};

export default Authentication;
