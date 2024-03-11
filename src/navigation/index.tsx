import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Login';
import {RootStackParamList} from './types';
import ForgotPassword from '../screens/ForgotPassword';
import SignUp from '../screens/SignUp';
import VerifyOTP from '../screens/VerifyOTP';
import SelectSports from '../screens/SelectSports';
import Home from '../screens/Home';
import OnBoarding from '../screens/OnBoarding';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
        <Stack.Screen name="SelectSports" component={SelectSports} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
