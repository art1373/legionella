import React from 'react';
import * as Redux from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './Stores';
import RootScreen from './Containers/Root/RootScreen';

const App = () => {
  return (
    <Redux.Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootScreen />
      </PersistGate>
    </Redux.Provider>
  );
};
export default App;
