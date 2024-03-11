/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';

import './src/config';
import Route from './src/navigation';
import './src/config/unistyles';
import {store} from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <>
      <Provider store={store}>
        <Route />
        <Toast />
      </Provider>
    </>
  );
}

export default App;
