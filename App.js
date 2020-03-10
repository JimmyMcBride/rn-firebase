import React from "react";
import firebase from "./firebase";

// Set up Redux/Router
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./src/store/reducers";
import AppContainer from "./AppNavigator";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const reactReduxFirebaseConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  attachAuthIsReady: true
};

const reactReduxFirebaseProps = {
  firebase,
  config: reactReduxFirebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

export default function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
        <AppContainer />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
