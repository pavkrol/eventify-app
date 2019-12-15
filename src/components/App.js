import React, { Component } from "react";
import { Router } from "@reach/router";
import GlobalStyle from "../GlobalStyle";
import Hero from "../views/Hero";
import MainView from "../views/MainView";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <main>
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
