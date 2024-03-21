import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PlayStackParamList} from './types';
import CreateGame from '../screens/CreateGame';
import Play from '../screens/Play';

const Stack = createNativeStackNavigator<PlayStackParamList>();

const PlayStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Play" component={Play} />
      <Stack.Screen name="CreateGame" component={CreateGame} />
    </Stack.Navigator>
  );
};

export default PlayStack;
