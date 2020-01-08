import React, { useState } from "react";
import styled from "styled-components";
import { signInWithGoogle } from "../firebase";
import BasicButton from "./BasicButton";
import ModalHeader from "./ModalHeader";
import InputBox from "./InputBox";

const SignInWrapper = styled.form`
  h2 {
    height: 4rem;
    margin-bottom: 1rem;
  }
  button {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const Submit = styled.input`
  padding: 0 1.5rem;
  height: 3rem;
  background-color: #0093ff;
  border: none;
  border-radius: 0.3125rem;
  color: #fff;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  letter-spacing: 0.1em;
  width: 100%;
  margin-bottom: 1rem;
  cursor: pointer;
  :hover {
    background-color: #0093ff80;
  }
`;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <SignInWrapper onSubmit={handleSubmit}>
      <ModalHeader>Sign In</ModalHeader>
      <InputBox>
        <p>E-mail:</p>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </InputBox>
      <InputBox>
        <p>Password</p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </InputBox>
      <Submit type="submit" value="Sign In" />
      <BasicButton height="3" color="#2BCA91" action={signInWithGoogle}>
        Sign In With Google
      </BasicButton>
    </SignInWrapper>
  );
};

export default SignIn;
