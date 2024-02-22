import {View, Text} from 'react-native';
import React from 'react';
import {useStyles} from 'react-native-unistyles';

import stylesheet from './styles';

type Props = {};

const Login = (props: Props) => {
  const {styles} = useStyles(stylesheet);
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};

export default Login;
