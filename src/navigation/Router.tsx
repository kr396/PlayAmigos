import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Login';
import {RootStackParamList} from './types';
import ForgotPassword from '../screens/ForgotPassword';
import SignUp from '../screens/SignUp';
import VerifyOTP from '../screens/VerifyOTP';
import SelectSports from '../screens/SelectSports';
import OnBoarding from '../screens/OnBoarding';
import {useAppSelector} from '../redux/hooks';
import {getAuthToken} from '../redux/commonSlice/userSlice';
import BottomTabs from './BottomTabs';
import SelectSport from '../screens/SelectSport';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Route = () => {
  const token = useAppSelector(getAuthToken);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!token ? (
          <>
            <Stack.Screen
              name="OnBoarding"
              component={OnBoarding}
              options={{animationTypeForReplace: !token ? 'pop' : 'push'}}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={BottomTabs} />
            <Stack.Screen name="SelectSports" component={SelectSports} />
            <Stack.Screen name="SelectSport" component={SelectSport}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
