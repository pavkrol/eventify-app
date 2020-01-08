import React, { Component } from "react";
import { Router } from "@reach/router";
import { auth } from "../firebase";
import GlobalStyle from "../GlobalStyle";
import Hero from "../views/Hero";
import MainView from "../views/MainView";
import Authentication from "./Authentication";

class App extends Component {
  state = {
    user: null,
    openAuthModal: false
  };

  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      this.setState({ user })
    );
  };

  toggleAuthModal = () => {
    this.setState({ openAuthModal: !this.state.openAuthModal });
  };

  render() {
    const { user, openAuthModal } = this.state;
    return (
      <>
        <GlobalStyle />
        <main>
          {openAuthModal && (
            <Authentication
              user={user}
              openAuthModal={openAuthModal}
              toggleAuthModal={this.toggleAuthModal}
            />
          )}
          <Router>
            <Hero path="/" />
            <MainView path="search" toggleAuthModal={this.toggleAuthModal} />
          </Router>
        </main>
      </>
    );
  }
}

export default App;
