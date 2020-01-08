import React, { useState } from "react";
import styled from "styled-components";
import BasicButton from "./BasicButton";
import ModalHeader from "./ModalHeader";
import InputBox from "./InputBox";

const SignUpWrapper = styled.form`
  h2 {
    height: 4rem;
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
  cursor: pointer;
  :hover {
    background-color: #0093ff80;
  }
`;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <SignUpWrapper onSubmit={handleSubmit}>
      <ModalHeader>Sign Up</ModalHeader>
      <InputBox>
        <p>Profile name</p>
        <input
          type="text"
          name="displayName"
          placeholder="Display Name"
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
        />
      </InputBox>
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
      <Submit type="submit" value="Sign Up" />
    </SignUpWrapper>
  );
};

export default SignUp;
