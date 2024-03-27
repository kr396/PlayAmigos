import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import {useStyles} from 'react-native-unistyles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import stylesheet from './styles';
import {InputText, ThemeButton} from '../../components';
import {RootStackParamList} from '../../navigation/types';
import api from '../../api';
import {endpoints} from '../../api/endpoints';
import {HttpStatusCode} from 'axios';
import {images, strings} from '../../config';
import {isValidEmail} from '../../utils/helpers';
import {LoginResponse} from './types';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {setAuthToken, setUserDetails} from '../../redux/commonSlice/userSlice';
import {getAppLoading} from '../../redux/commonSlice/appSlice';

const Login: FC<NativeStackScreenProps<RootStackParamList, 'Login'>> = ({
  navigation,
}) => {
  const {styles} = useStyles(stylesheet);
  const dispatch = useAppDispatch();
  const loading = useAppSelector(getAppLoading);
  const passwordRef = useRef<TextInput>(null);
  const [email, setEmail] = useState('kaushalp.dev@gmail.com');
  const [password, setPassword] = useState('Test@123');

  const onForgotPassPress = () => {
    navigation.navigate('ForgotPassword');
  };

  const onLoginPress = async () => {
    try {
      if (!email) {
        Toast.show({
          type: 'error',
          text1: strings.validationError,
          text2: 'Please enter email',
        });
        return;
      }
      if (!isValidEmail(email)) {
        Toast.show({
          type: 'error',
          text1: strings.validationError,
          text2: 'Please enter valid email',
        });
        return;
      }
      if (!password) {
        Toast.show({
          type: 'error',
          text1: strings.validationError,
          text2: 'Please enter password',
        });
        return;
      }

      const response = await api.post<LoginResponse>(endpoints.login, {
        email: email.trim(),
        password,
      });
      if (
        response.status === HttpStatusCode.Ok &&
        response.data.meta?.status === 1
      ) {
        dispatch(setAuthToken(response.data.meta.tokenData));
        if (!response.data.meta.isEmailVerified) {
          navigation.navigate('VerifyOTP', {email});
        } else {
          if (!response.data.data.isSportAdded) {
            navigation.reset({
              index: 0,
              routes: [{name: 'SelectSports'}],
            });
          } else {
            dispatch(setUserDetails(response.data.data));
            navigation.reset({
              index: 0,
              routes: [{name: 'Home'}],
            });
          }
        }
      } else {
        Toast.show({
          type: 'error',
          text1: strings.error,
          text2: response.data?.meta?.message,
        });
      }
    } catch (error) {}
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.loginBackground} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.scrollView}
            bounces={false}>
            <View style={styles.content}>
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
                loading={loading}
                onPress={onLoginPress}
              />
            </View>

            <View style={styles.bottomRow}>
              <Text style={styles.bottomText}>
                Don’t have an account?{'  '}
              </Text>
              <Pressable onPress={onSignUpPress}>
                <Text style={styles.signUpText}>Sign Up</Text>
              </Pressable>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
