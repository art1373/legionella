import React from "react";
import * as Redux from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./Stores";
import RootScreen from "./Containers/Root/RootScreen";
import { LogBox } from "react-native";
import FlashMessage from "react-native-flash-message";

LogBox.ignoreAllLogs(true);
const App = () => {
  return (
    <Redux.Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootScreen />
        <FlashMessage position="top" />
      </PersistGate>
    </Redux.Provider>
  );
};
export default App;
