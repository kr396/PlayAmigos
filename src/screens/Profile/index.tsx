import {View, Text, Button} from 'react-native';
import React from 'react';

import {useAppDispatch} from '../../redux/hooks';

const Profile = () => {
  const dispatch = useAppDispatch();

  const onLogoutPress = () => {
    dispatch({type: 'USER_LOGOUT'});
  };
  return (
    <View>
      <Text>Profie</Text>
      <Button title="Logout" onPress={onLogoutPress} />
    </View>
  );
};

export default Profile;
