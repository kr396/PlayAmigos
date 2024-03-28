import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PlayStackParamList} from './types';
import CreateGame from '../screens/CreateGame';
import Play from '../screens/Play';
import GameDetails from '../screens/GameDetails';
import AllPlayers from '../screens/AllPlayers';
import AllQueries from '../screens/AllQueries';

const Stack = createNativeStackNavigator<PlayStackParamList>();

const PlayStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Play" component={Play} />
      <Stack.Screen name="CreateGame" component={CreateGame} />
      <Stack.Screen name="GameDetails" component={GameDetails} />
      <Stack.Screen name="AllPlayers" component={AllPlayers} />
      <Stack.Screen name="AllQueries" component={AllQueries} />
    </Stack.Navigator>
  );
};

export default PlayStack;
