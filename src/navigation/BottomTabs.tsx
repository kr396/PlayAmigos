import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useStyles} from 'react-native-unistyles';

import Home from '../screens/Home';
import {BottomTabParamList} from './types';
import {images} from '../config';
import ProfileStack from './ProfileStack';
import PlayStack from './PlayStack';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = () => {
  const {theme} = useStyles();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarIcon: ({color}) => {
          if (route.name === 'Home') {
            return (
              <Image source={images.homeIcon} style={{tintColor: color}} />
            );
          } else if (route.name === 'PlayStack') {
            return (
              <Image source={images.playIcon} style={{tintColor: color}} />
            );
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="PlayStack" component={PlayStack} />
      <Tab.Screen
        name="ProfileStack"
        options={{tabBarLabel: 'Profile'}}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
