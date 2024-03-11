/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Toast from 'react-native-toast-message';

import './src/config';
import Route from './src/navigation';
import './src/config/unistyles';

function App(): React.JSX.Element {
  return (
    <>
      <Route />
      <Toast />
    </>
  );
}

export default App;
