import React from "react";
import styled from "styled-components";
import { signOut } from "../firebase";
import BasicButton from "./BasicButton";
import ModalHeader from "./ModalHeader";
import defaultUserPic from "../img/default_user.png";
import CloseButton from "./CloseButton";

const CurrentUserWrapper = styled.section`
  position: relative;
  width: 35rem;
  height: 35rem;
  background: linear-gradient(162.05deg, #151e2c 67.82%, #1a3856 93.99%);
  border-radius: 0.5rem;
  padding: 1rem 1rem 1rem 1rem;
  display: grid;
  grid-template-rows: 4rem 11.25rem 1fr;
  grid-template-columns: 11.25rem 1fr;
  grid-gap: 1rem;
  button {
    width: 11.25rem;
    @media (max-width: 40rem) {
      width: 100%;
      grid-column: 1 / 3;
    }
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 0.3125rem;
  }
  h2 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  button:last-child {
    width: 1.6rem;
    position: absolute;
    right: 1.7rem;
    top: 2.2rem;
  }
  @media (max-width: 40rem) {
    grid-template-columns: 7rem 1fr;
    grid-template-rows: 4rem auto 1fr;
    height: auto;
    width: 95vw;
  }
`;

const UserDetails = styled.div`
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
  color: #fff;
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  font-weight: 300;
`;

const CurrentUser = ({
  displayName,
  photoURL,
  email,
  createdAt,
  children,
  toggleAuthModal
}) => {
  return (
    <CurrentUserWrapper>
      <ModalHeader>User Profile</ModalHeader>
      {photoURL ? (
        <img src={photoURL} alt={displayName} />
      ) : (
        <img src={defaultUserPic} alt="default user photo" />
      )}
      <UserDetails>
        <p>User name: {displayName}</p>
        <p>E-mail address: {email}</p>
        <p>Joined: {createdAt}</p>
      </UserDetails>
      <BasicButton height="2.4" color="#2BCA91" action={signOut}>
        Sign Out
      </BasicButton>
      <CloseButton action={toggleAuthModal} />
    </CurrentUserWrapper>
  );
};

CurrentUser.defaultProps = {
  displayName: "Krzysztof Krawczyk",
  email: "krzysiukrawczyk@buziaczek.pl",
  photoURL:
    "https://upload.wikimedia.org/wikipedia/commons/f/f1/Krzysztof_Krawczyk11.jpg",
  createdAt: new Date()
};

export default CurrentUser;
