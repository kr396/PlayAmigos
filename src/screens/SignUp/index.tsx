import {View, Text} from 'react-native';
import React, {FC, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useStyles} from 'react-native-unistyles';

import {RootStackParamList} from '../../navigation/types';
import stylesheet from './styles';
import {InputText, ThemeButton} from '../../components';

type Props = {};

const SignUp: FC<NativeStackScreenProps<RootStackParamList, 'SignUp'>> = ({
  navigation,
}) => {
  const {styles} = useStyles(stylesheet);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');

  const onSignUpPress = () => {
    navigation.navigate('VerifyOTP');
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}></View>
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
          />
          <InputText
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}
            returnKeyType="next"
            containerStyles={styles.input}
          />
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
            returnKeyType="next"
            containerStyles={styles.input}
            secureTextEntry={true}
          />
          <InputText
            label="Confirm Password"
            value={cPassword}
            onChangeText={setCPassword}
            returnKeyType="done"
            containerStyles={styles.input}
            secureTextEntry={true}
          />

          <ThemeButton
            title="Sign Up"
            style={styles.loginBtn}
            onPress={onSignUpPress}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;
