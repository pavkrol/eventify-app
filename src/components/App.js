import GlobalStyle from "../GlobalStyle";
import React, { useState } from "react";
import { Router } from "@reach/router";
import UserProvider from "../providers/UserProvider";
import KeyProvider from "../providers/KeyProvider";
import Hero from "../views/Hero";
import MainView from "../views/MainView";
import Authentication from "./Authentication";
import { Transition } from "react-transition-group";
import gsap from "gsap";

const App = () => {
  const [openAuthModal, setAuthModal] = useState(false);

  const toggleAuthModal = () => {
    setAuthModal(!openAuthModal);
  };

  return (
    <>
      <GlobalStyle />
      <KeyProvider>
        <UserProvider>
          <main>
            <Transition
              timeout={1000}
              mountOnEnter
              unmountOnExit
              in={openAuthModal}
              addEndListener={(node, done) => {
                gsap.to(node, {
                  duration: 0.5,
                  y: openAuthModal ? 0 : -20,
                  autoAlpha: openAuthModal ? 1 : 0,
                  onComplete: done
                });
              }}
            >
              <Authentication
                openAuthModal={openAuthModal}
                toggleAuthModal={toggleAuthModal}
              />
            </Transition>
            <Router>
              <Hero path="/" />
              <MainView path="search" toggleAuthModal={toggleAuthModal} />
            </Router>
          </main>
        </UserProvider>
      </KeyProvider>
    </>
  );
};

export default App;
