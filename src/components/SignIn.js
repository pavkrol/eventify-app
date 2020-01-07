import React, { useState } from "react";
import styled from "styled-components";
import { signInWithGoogle } from "../firebase";

const SingInWrapper = styled.div`
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

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <SingInWrapper onSubmit={handleSubmit}>
      <form>
        <h2>Sign In</h2>
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
        <input type="submit" value="Sign In" />
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      </form>
    </SingInWrapper>
  );
};

export default SingIn;
