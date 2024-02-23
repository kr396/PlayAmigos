import {View, Text} from 'react-native';
import React, {FC, useState} from 'react';
import {useStyles} from 'react-native-unistyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import stylesheet from './styles';
import {InputText, ThemeButton} from '../../components';
import {RootStackParamList} from '../../navigation/types';

const Login: FC<NativeStackScreenProps<RootStackParamList, 'Login'>> = ({
  navigation,
}) => {
  const {styles} = useStyles(stylesheet);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onForgotPassPress = () => {
    navigation.navigate('ForgotPassword');
  };

  const onLoginPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}></View>
      <View style={styles.main}>
        <KeyboardAwareScrollView style={styles.scrollView}>
          <Text style={styles.title}>Welcome back!</Text>
          <InputText
            label="Email"
            value={email}
            onChangeText={setEmail}
            returnKeyType="next"
            containerStyles={styles.input}
          />
          <InputText
            label="Password"
            value={password}
            onChangeText={setPassword}
            returnKeyType="done"
            containerStyles={styles.input}
          />
          <View style={styles.row}>
            <Text style={styles.forgotPass} onPress={onForgotPassPress}>
              Forgot Password
            </Text>
          </View>
          <ThemeButton
            title="Log In"
            style={styles.loginBtn}
            onPress={onLoginPress}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default Login;
