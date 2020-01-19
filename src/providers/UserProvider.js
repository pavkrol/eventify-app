import React, { Component, createContext } from "react";
import { auth, createUserProfileDocument, getUserRef } from "../firebase";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null
  };

  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const user = await createUserProfileDocument(userAuth);
      this.setState({ user });

      if (userAuth) {
        const userRef = await getUserRef(userAuth.uid);
        userRef.onSnapshot(snapshot => {
          this.setState({
            user: {
              uid: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };

  render() {
    const { user } = this.state;
    const { children } = this.props;

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }
}

export default UserProvider;