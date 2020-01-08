import React from "react";
import styled from "styled-components";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const SignInAndSignUpWrapper = styled.div`
  width: 35rem;
  background: linear-gradient(162.05deg, #151e2c 67.82%, #1a3856 93.99%);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const SignInAndSignUp = () => (
  <SignInAndSignUpWrapper>
    <SignIn />
    <SignUp />
  </SignInAndSignUpWrapper>
);

export default SignInAndSignUp;
