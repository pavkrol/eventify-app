import React, { Component } from "react";
import { Router } from "@reach/router";
import GlobalStyle from "../GlobalStyle";
import Hero from "../views/Hero";
import SearchView from "../views/SearchView";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <main>
          <Router>
            <Hero path="/" />
            <SearchView path="search" />
          </Router>
        </main>
      </>
    );
  }
}

export default App;
