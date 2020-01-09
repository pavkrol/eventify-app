import React, { useState } from "react";
import { Router } from "@reach/router";
import UserProvider from "../providers/UserProvider";
import GlobalStyle from "../GlobalStyle";
import Hero from "../views/Hero";
import MainView from "../views/MainView";
import Authentication from "./Authentication";

const App = () => {
  const [openAuthModal, setAuthModal] = useState(false);

  const toggleAuthModal = () => {
    setAuthModal(!openAuthModal);
  };

  return (
    <UserProvider>
      <GlobalStyle />
      <main>
        {openAuthModal && (
          <Authentication
            openAuthModal={openAuthModal}
            toggleAuthModal={toggleAuthModal}
          />
        )}
        <Router>
          <Hero path="/" />
          <MainView path="search" toggleAuthModal={toggleAuthModal} />
        </Router>
      </main>
    </UserProvider>
  );
};

export default App;
