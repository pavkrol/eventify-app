import React, { Component } from "react";
import { Router } from "@reach/router";
import GlobalStyle from "../GlobalStyle";
import Hero from "../views/Hero";
import MainView from "../views/MainView";
import Authentication from "./Authentication";

class App extends Component {
  state = {
    user: null,
    openAuthModal: false
  };
  render() {
    const { user, openAuthModal } = this.state;
    return (
      <>
        <GlobalStyle />
        <main>
          {openAuthModal && (
            <Authentication user={user} openAuthModal={openAuthModal} />
          )}
          <Router>
            <Hero path="/" />
            <MainView path="search" />
          </Router>
        </main>
      </>
    );
  }
}

export default App;
