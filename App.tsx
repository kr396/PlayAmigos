/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';

import './src/config';
import Route from './src/navigation/Router';
import './src/config/unistyles';
import {persistor, store} from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <ActionSheetProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <Route />
          <Toast />
        </Provider>
      </PersistGate>
    </ActionSheetProvider>
  );
}

export default App;
