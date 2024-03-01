import {View, Text, TextInput} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import {useStyles} from 'react-native-unistyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import stylesheet from './styles';
import {InputText, ThemeButton} from '../../components';
import {RootStackParamList} from '../../navigation/types';
import api from '../../api';
import {endpoints} from '../../api/endpoints';
import {HttpStatusCode} from 'axios';

const Login: FC<NativeStackScreenProps<RootStackParamList, 'Login'>> = ({
  navigation,
}) => {
  const {styles} = useStyles(stylesheet);
  const passwordRef = useRef<TextInput>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onForgotPassPress = () => {
    navigation.navigate('ForgotPassword');
  };

  const onLoginPress = async () => {
    try {
      // TODO: Check email and password for validation
      const response = await api.post(endpoints.login, {email, password});
      if (
        response.status === HttpStatusCode.Ok &&
        response.data.meta?.status === 1
      ) {
      } else {
        // TODO: show an error
      }
    } catch (error) {
      // TODO: Show error toast
    }
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
            textContentType="emailAddress"
            autoCapitalize="none"
            containerStyles={styles.input}
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <InputText
            ref={passwordRef}
            label="Password"
            value={password}
            onChangeText={setPassword}
            returnKeyType="done"
            textContentType="password"
            secureTextEntry={true}
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
          <ThemeButton
            title="Sign Up"
            style={styles.loginBtn}
            onPress={() => navigation.navigate('SignUp')}
          />
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default Login;
