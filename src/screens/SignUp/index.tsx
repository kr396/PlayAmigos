import {View, Text, TextInput, Image, Pressable} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useStyles} from 'react-native-unistyles';
import {HttpStatusCode} from 'axios';
import CheckBox from '@react-native-community/checkbox';

import {RootStackParamList} from '../../navigation/types';
import stylesheet from './styles';
import {InputText, ThemeButton} from '../../components';
import api from '../../api';
import {endpoints} from '../../api/endpoints';
import {images, strings} from '../../config';
import Toast from 'react-native-toast-message';
import {isValidEmail} from '../../utils/helpers';

const SignUp: FC<NativeStackScreenProps<RootStackParamList, 'SignUp'>> = ({
  navigation,
}) => {
  const {styles, theme} = useStyles(stylesheet);
  const lastNameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const cPasswordRef = useRef<TextInput>(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const onSignUpPress = async () => {
    try {
      if (!firstName.trim()) {
        Toast.show({
          type: 'error',
          text1: strings.validationError,
          text2: 'Please enter first name',
        });
        return;
      }
      if (!lastName.trim()) {
        Toast.show({
          type: 'error',
          text1: strings.validationError,
          text2: 'Please enter last name',
        });
        return;
      }
      if (!email.trim()) {
        Toast.show({
          type: 'error',
          text1: strings.validationError,
          text2: 'Please enter email',
        });
        return;
      }
      if (!isValidEmail(email.trim())) {
        Toast.show({
          type: 'error',
          text1: strings.validationError,
          text2: 'Please enter valid email',
        });
        return;
      }
      if (!isValidEmail(email.trim())) {
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
      if (password.length < 6) {
        Toast.show({
          type: 'error',
          text1: strings.validationError,
          text2: 'Length of password must be 6',
        });
        return;
      }
      if (!cPassword) {
        Toast.show({
          type: 'error',
          text1: strings.validationError,
          text2: 'Please enter confirm password',
        });
        return;
      }
      if (password !== cPassword) {
        Toast.show({
          type: 'error',
          text1: strings.validationError,
          text2: 'Password and confirm password does bot match',
        });
        return;
      }
      if (!isTermsAccepted) {
        Toast.show({
          type: 'error',
          text1: strings.validationError,
          text2: 'Please accept terms and condition',
        });
        return;
      }
      const response = await api.post(endpoints.signup, {
        firstname: firstName,
        lastname: lastName,
        email,
        password,
      });
      if (
        response.status === HttpStatusCode.Ok &&
        response.data?.meta.status === 1
      ) {
        navigation.navigate('VerifyOTP');
      }
    } catch (error) {
      // TODO: Show error toast
    }
  };

  const onSignInPress = () => {
    navigation.goBack();
  };

  const onTermsPress = () => {
    // TODO:
  };

  const onPrivacyPress = () => {
    // TODO:
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.signupBackground} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.main}>
          <Text style={styles.title}>Sign Up</Text>
          <InputText
            label="First Name"
            value={firstName}
            onChangeText={setFirstName}
            returnKeyType="next"
            containerStyles={styles.input}
            onSubmitEditing={() => lastNameRef.current?.focus()}
          />
          <InputText
            ref={lastNameRef}
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}
            returnKeyType="next"
            containerStyles={styles.input}
            onSubmitEditing={() => emailRef.current?.focus()}
          />
          <InputText
            ref={emailRef}
            label="Email"
            value={email}
            onChangeText={setEmail}
            returnKeyType="next"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize={'none'}
            containerStyles={styles.input}
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <InputText
            ref={passwordRef}
            label="Password"
            value={password}
            onChangeText={setPassword}
            returnKeyType="next"
            containerStyles={styles.input}
            secureTextEntry={true}
            onSubmitEditing={() => cPasswordRef.current?.focus()}
          />
          <InputText
            ref={cPasswordRef}
            label="Confirm Password"
            value={cPassword}
            onChangeText={setCPassword}
            returnKeyType="done"
            containerStyles={styles.input}
            secureTextEntry={true}
          />
          <View style={styles.privacyLinkContainer}>
            <CheckBox
              disabled={false}
              value={isTermsAccepted}
              onValueChange={newValue => setIsTermsAccepted(newValue)}
              style={styles.checkbox}
              tintColors={{true: theme.colors.primary}}
              boxType={'square'}
            />
            <Text style={styles.privacyText}>
              By Signing up, you agree to the{' '}
              <Text style={styles.themeText} onPress={onTermsPress}>
                Terms of Service
              </Text>{' '}
              and
              <Text style={styles.themeText} onPress={onPrivacyPress}>
                {' '}
                Privacy Policy
              </Text>
            </Text>
          </View>
          <ThemeButton
            title="Sign Up"
            style={styles.loginBtn}
            onPress={onSignUpPress}
          />
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>Don’t have an account?{'  '}</Text>
          <Pressable onPress={onSignInPress}>
            <Text style={styles.signInText}>Sign In</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;
