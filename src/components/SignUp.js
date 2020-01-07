import React, { useState } from "react";
import styled from "styled-components";

const SignUpWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  form {
    background-color: white;
    width: 500px;
    height: 800px;
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
      <form>
        <h2>Sign Up</h2>
        <input
          type="text"
          name="displayName"
          placeholder="Display Name"
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input type="submit" value="Sign Up" />
      </form>
    </SignUpWrapper>
  );
};

export default SignUp;
