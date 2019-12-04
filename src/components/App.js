import React, { Component } from "react";
import GlobalStyle from "../GlobalStyle";
import Hero from "./Hero";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <main>
          <Hero />
        </main>
      </>
    );
  }
}

export default App;
