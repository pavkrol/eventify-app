import React, { Component, createContext } from "react";
import { firestore } from "../firebase";

export const KeyContext = createContext({ key: null });

class KeyProvider extends Component {
  state = {
    key: null
  };

  componentDidMount = async () => {
    const getKey = async () => {
      const result = await (
        await firestore.collection("songkick").get()
      ).docs[0].data().key;
      this.setState({ key: result });
    };
    getKey();
  };

  render() {
    const { key } = this.state;
    const { children } = this.props;
    return <KeyContext.Provider value={key}>{children}</KeyContext.Provider>;
  }
}

export default KeyProvider;
