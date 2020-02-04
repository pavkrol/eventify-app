import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import CloseButton from "./CloseButton";

const SignInAndSignUpWrapper = styled.div`
  width: 35rem;
  background: linear-gradient(162.05deg, #151e2c 67.82%, #1a3856 93.99%);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 20;
  visibility: hidden;
  > button {
    position: absolute;
    right: 1.7rem;
    top: 2.2rem;
  }
  @media (max-width: 40rem) {
    width: 90vw;
  }
`;

const SignInAndSignUp = ({ toggleAuthModal, openAuthModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    gsap.set(modalRef.current, {
      opacity: 0,
      y: -20,
      visibility: "visible"
    });
    gsap.to(modalRef.current, { duration: 0.5, opacity: 1, y: 0 });
  }, []);

  return (
    <SignInAndSignUpWrapper ref={modalRef}>
      <CloseButton action={toggleAuthModal} />
      <SignIn />
      <SignUp />
    </SignInAndSignUpWrapper>
  );
};

export default SignInAndSignUp;
